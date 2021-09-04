import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/core/interfaces/card.interface';
import { Detail } from 'src/app/core/interfaces/details.interface';
import { ApiService } from 'src/app/core/services/api.service';
import { ThemeService } from 'src/app/core/services/theme.service';
@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit {

  datas: Card[];
  details: Detail[];
  isDark: boolean = false;
  // dependency injection of api service
  constructor(private api: ApiService, private theme: ThemeService) { }

  // component on load funtion - not using async since there is no real api call.
  ngOnInit() {
    this.load_page_data();
    this.isDark = this.theme.isThemeDark();
  }

  // the initial function call to populate the page
  load_page_data() {
    try { // best practise to wrap data_fetch / api calls in try-catch block
      this.datas = this.api.fetch_overall_stat();
      this.details = this.api.fetch_stat_details();
    }
    catch (e) {
      console.log(e);
    }
  }

  onThemeChange() {
    this.isDark = !this.isDark;
    this.theme.toggleIsDark(this.isDark);
  }

  drop(e) {
    console.log(e);
  }

}
