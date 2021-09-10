import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, HostListener, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/services/api.service';
import { ThemeService } from 'src/app/core/services/theme.service';
import { Card } from 'src/app/shared/interfaces/card.interface';
import { Detail } from 'src/app/shared/interfaces/details.interface';
@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit {

  mobileView: boolean; // to determine the current view = [mobile | larger screen]

  // hot listener for window manual resizing
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    event.target.innerWidth;
    if (event.target.innerWidth < 513) {
      this.mobileView = true;
    } else {
      this.mobileView = false;
    }
  }

  datas: Card[];
  details: Detail[];
  isDark: boolean = false;

  // dependency injection of api service
  constructor(private api: ApiService, private theme: ThemeService) {
    // once page loads, hotlistner dont work until manually resized
    // line of code to get window width
    if (window.innerWidth < 513) {
      this.mobileView = true;
    } else {
      this.mobileView = false;
    }
  }

  // component on load funtion - not using async since there is no real api call.
  ngOnInit(): void {
    this.load_page_data();
    this.isDark = this.theme.isThemeDark();
  }

  // the initial function call to populate the page
  load_page_data(): void {
    try { // best practise to wrap data_fetch / api calls in try-catch block

      // local storage - the order of big cards if saved in localstorage
      const hasSaved = localStorage.getItem('datas');
      if (hasSaved) { // if drag-drop order already saved
        this.datas = [];
        let data = this.api.fetch_overall_stat(); // fetch new data for big cards
        const savedOrder: string[] = JSON.parse(hasSaved);
        savedOrder.forEach(x => { // keep the order, but add new data for big cards
          const item = data.filter(y => y.platform === x);
          if (item.length) {
            this.datas.push(item[0]);
          }
        });
        // to add new data even if the order is not saved
        data.filter(x => !savedOrder.includes(x.platform))?.forEach(y => {
          this.datas.push(y);
        });

        // api call small cards (localstorage feature not used for small cards)
        this.details = this.api.fetch_stat_details(); // fetch data for small card
      } else { // if no drag-drop order is saved
        const forBigCards = this.api.fetch_overall_stat(); // fetch data - big cards
        const forSmallCards = this.api.fetch_stat_details(); // fetch data - small cards

        // for illustration purposes only - for interdependent promises, but to execute ...
        // .. in parallel and all has to be succeeded
        const promises = [forBigCards, forSmallCards];

        // TAG-5 custom type created to accomodate Promise.all result
        type PromiseResult = [Card[], Detail[]];

        // TAG-6 process of waiting all parallel promises to complete [succeed | fail]
        Promise.all(promises).then((results: PromiseResult) => {
          // all succeeded
          this.datas = results[0];
          this.details = results[1];
        }).catch(err => {
          // if any one promise fails
          console.log(err);
        });
      }
    }
    catch (e) {
      console.log(e);
    }
  }

  // fn for toggling the theme of the app
  onThemeChange(): void {
    this.isDark = !this.isDark;
    this.theme.toggleIsDark(this.isDark);
  }

  // supporting function to reorder the drag-drop feature - big card
  dropData(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.datas, event.previousIndex, event.currentIndex);
    // save to local storage
    localStorage.setItem('datas', JSON.stringify(this.datas.map(x => x.platform)));
  }

  dropDetails(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.details, event.previousIndex, event.currentIndex);
  }

  // TAG-2 for the bottom cards as they may be in large numbers
  trackByFunc(index: number, detail: Detail) {
    return detail.id;
  }


}
