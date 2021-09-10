import { Injectable } from '@angular/core';
import { getSunrise, getSunset } from 'sunrise-sunset-js';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  isDark;
  constructor() {
    this.loadTheme();
  }

  toggleIsDark(isDark: boolean) {
    // navigator.geolocation.getCurrentPosition(function (position) {
    //   console.log(getSunset(position.coords.latitude, position.coords.longitude));
    // });
    try {
      if (isDark) {
        document.documentElement.style.setProperty('--bg', 'hsl(230, 17%, 14%)');
        document.documentElement.style.setProperty('--bg-top', 'hsl(232, 19%, 15%)');
        document.documentElement.style.setProperty('--card-bg', 'hsl(228, 28%, 20%)');
        document.documentElement.style.setProperty('--card-bg-hov', 'hsl(228deg 29% 24%)');
        document.documentElement.style.setProperty('--font', 'hsl(0, 0%, 100%)');
        document.documentElement.style.setProperty('--font-hov', 'hsl(0, 0%, 100%)');
        document.documentElement.style.setProperty('--font-desat', 'hsl(228, 34%, 66%)');
        document.documentElement.style.setProperty('--tog-bar', 'linear-gradient(90deg, hsl(210, 78%, 56%), hsl(146, 68%, 55%))');
        document.documentElement.style.setProperty('--tog-bar-hov', 'linear-gradient(90deg, hsl(210, 78%, 56%), hsl(146, 68%, 55%))');
        document.documentElement.style.setProperty('--tog-handle', 'hsl(232, 19%, 15%)');

      } else {
        isDark = false;
        document.documentElement.style.setProperty('--bg', 'hsl(0, 0%, 100%)');
        document.documentElement.style.setProperty('--bg-top', 'hsl(225, 100%, 98%)');
        document.documentElement.style.setProperty('--card-bg', 'hsl(227, 47%, 96%)');
        document.documentElement.style.setProperty('--card-bg-hov', 'rgb(225, 229, 241)');
        document.documentElement.style.setProperty('--font', 'hsl(230, 17%, 14%)');
        document.documentElement.style.setProperty('--font-hov', 'hsl(228, 16%, 36%)');
        document.documentElement.style.setProperty('--font-desat', 'hsl(228, 12%, 44%)');
        document.documentElement.style.setProperty('--tog-bar', 'hsl(230, 22%, 74%)');
        document.documentElement.style.setProperty('--tog-bar--hov', 'linear-gradient(90deg, hsl(210, 78%, 56%), hsl(146, 68%, 55%))');
        document.documentElement.style.setProperty('--tog-handle', 'hsl(225, 100%, 98%)');
      }

      // saving theme preference to the localstorage with the identifier 'themeIsDark'
      localStorage.setItem('themeIsDark', isDark.toString());
    } catch (e) {
      console.log(e);
    }


  }

  loadTheme() {
    try {
      const hasSaved = localStorage.getItem('themeIsDark');
      if (hasSaved) {
        this.isDark = JSON.parse(hasSaved);
      } else {
        // let isDark;
        navigator.geolocation.getCurrentPosition(function (position) {
          const sunset = getSunset(position.coords.latitude, position.coords.longitude);
          const sunrise = getSunrise(position.coords.latitude, position.coords.longitude);
          const currentTime = new Date();
          if (currentTime > sunrise && currentTime < sunset) {
            // isDark = false;
            console.log('mrng')
          } else {
            // isDark = true;
            console.log('snst');
          }
        });
      }
      this.toggleIsDark(this.isDark);
    } catch (e) {
      console.log(e);
    }
  }

  isThemeDark(): boolean {
    try {
      const hasSaved = localStorage.getItem('themeIsDark');
      if (hasSaved) {
        return JSON.parse(hasSaved);
      } else
        return false;
    }
    catch (e) {
      console.log(e);
    }
  }
}
