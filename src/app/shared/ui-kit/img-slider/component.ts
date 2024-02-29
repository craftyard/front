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
      @Inject(DOCUMENT) private document: Document,
      private appState: AppState,
    ) {
    }

    ngOnInit(): void {
      this.appState.appMode$.subscribe((mode) => {
        this.appMode = mode;
      });
      const script = this.document.createElement('script');
      script.src = 'https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js';
      this.document.body.appendChild(script);
    }

    onMouseMove(event: MouseEvent) {
      const pixel = event.clientX - this.elementRef.nativeElement.offsetLeft;
      const percent = Math.round((100 * pixel) / this.width);
      const imgLength = this.images.length - 1;
      const img = Math.round((imgLength * percent) / 100);
      this.currentIndex = img;
    }

    cnageImageDot(id:number) {
      this.currentIndex = id;
    }
}
