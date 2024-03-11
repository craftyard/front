import { DOCUMENT } from '@angular/common';
import {
  Component, ElementRef, Inject, Input, OnInit,
} from '@angular/core';
import { AppState } from '../../states/app-state';

@Component({
  selector: 'img-slider',
  templateUrl: './content.html',
  styleUrls: ['./style.css'],
})
export class ImgSliderComponent implements OnInit {
    @Input() images: string[] = [];

    @Input() width!:number;

    currentIndex: number = 0;

    appMode: 'mobile' | 'browser' = 'browser';

    constructor(
      private elementRef: ElementRef,
      private appState: AppState,
    ) {
    }

    ngOnInit(): void {
      this.appState.appMode$.subscribe((mode) => {
        this.appMode = mode;
      });
      if (this.images.length === 0) {
        this.images.push('../../../../assets/model-default-image.jpg');
      }
    }

    onMouseMove(event: MouseEvent) {
      const leftOffsetOfPixel = event.clientX - this.elementRef.nativeElement.offsetLeft;
      const leftOffsetOfPersent = Math.round((100 * leftOffsetOfPixel) / this.width);
      const lastIndex = this.images.length - 1;
      const showedImgIndex = Math.round((lastIndex * leftOffsetOfPersent) / 100);
      this.currentIndex = showedImgIndex;
    }

    changeImage(id:number) {
      this.currentIndex = id;
    }
}
