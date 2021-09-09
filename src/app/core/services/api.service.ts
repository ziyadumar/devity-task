import { Injectable } from '@angular/core';
import { Detail } from '../../shared/interfaces/details.interface';
import { Card } from '../../shared/interfaces/card.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // in reality http client is injected here - not added since no third party api is used
  constructor() { }

  // funtion to fetch data for main info
  fetch_overall_stat(): Card[] {
    return [
      {
        platform: 'facebook',
        count: '1987',
        isProgress: true,
        icon: 'icon-facebook.svg',
        percentage: 12,
        username: '@nathanf'
      },
      {
        platform: 'twitter',
        count: '1044',
        isProgress: true,
        icon: 'icon-twitter.svg',
        percentage: 99,
        username: '@nathanf'
      },
      {
        platform: 'instagram',
        count: '11k',
        isProgress: true,
        icon: 'icon-instagram.svg',
        percentage: 1099,
        username: '@nathanf'
      },
      {
        platform: 'youtube',
        count: '8239',
        isProgress: false,
        icon: 'icon-youtube.svg',
        percentage: 144,
        username: '@nathanf'
      }
    ];
  }

  // funtion to fetch details of social media stats
  fetch_stat_details(): Detail[] {
    return [
      {
        id: 1,
        count: '87',
        icon: 'icon-facebook.svg',
        isProgress: true,
        text: 'Page Views',
        percentage: 3
      },
      {
        id: 2,
        count: '52',
        icon: 'icon-facebook.svg',
        isProgress: false,
        text: 'Likes',
        percentage: 2
      },
      {
        id: 3,
        count: '5462',
        icon: 'icon-instagram.svg',
        isProgress: true,
        text: 'Likes',
        percentage: 2257
      },
      {
        id: 4,
        count: '52k',
        icon: 'icon-instagram.svg',
        isProgress: true,
        text: 'Profile Views',
        percentage: 1375
      },
      {
        id: 5,
        count: '117',
        icon: 'icon-twitter.svg',
        isProgress: true,
        text: 'Retweets',
        percentage: 303
      },
      {
        id: 6,
        count: '507',
        icon: 'icon-twitter.svg',
        isProgress: true,
        text: 'Likes',
        percentage: 553
      },
      {
        id: 7,
        count: '107',
        icon: 'icon-youtube.svg',
        isProgress: false,
        text: 'Likes',
        percentage: 19
      },
      {
        id: 8,
        count: '1407',
        icon: 'icon-youtube.svg',
        isProgress: false,
        text: 'Total Views',
        percentage: 12
      }
    ];
  }
}
