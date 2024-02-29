import { Component, OnInit } from '@angular/core';
import { AppState } from '../../../app/shared/states/app-state';

@Component({
  selector: 'model-widget',
  templateUrl: './content.html',
  styleUrls: ['./style.css'],
})

export class ModelWidgetComponent implements OnInit {
  imgs: string[] = [
    'https://ir-3.ozone.ru/s3/multimedia-q/wc1000/6271447442.jpg',
    'https://ir-3.ozone.ru/s3/multimedia-1-j/wc1000/6915101347.jpg',
    'https://flash-imperia.ru/wp-content/uploads/2020/05/fleshka-s-metallicheskim-korpusom-sinyaya-min.jpg',
    'https://oe.kz/upload/iblock/202/usb-fleshka-32-gb-transcend-jetflash-370-usb-2-0-belaya-2.jpeg',
    'https://static.shop.kz/upload/resize_cache/iblock/970/450_450_1/ktc_product_usb_dtkn_32gb_2_zm_lg_min.jpg',
  ];

  selectedImgIndex: number = 0;

  apMode: 'mobile' | 'browser' = 'browser';

  constructor(private appState:AppState) {}

  handleClick(index: number): void {
    this.selectedImgIndex = index;
    console.log(index);
  }

  ngOnInit(): void {
    this.appState.appMode$.subscribe((mode) => {
      this.apMode = mode;
    });
  }
}
