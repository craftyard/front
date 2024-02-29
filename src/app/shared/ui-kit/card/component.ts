import {
  Component, Input, OnInit, ComponentFactoryResolver, ViewContainerRef, ViewChild, Type,
} from '@angular/core';
import { ModelCardAttrsComponent } from './card-product/component';

export interface ModelCardAttrs {
  name: string;
  category: string;
  images: string[],
  modelId: string,
}

@Component({
  selector: 'card-item',
  template: `
    <ng-container #container></ng-container>
  `,
})
export class CardItemComponent<T extends ModelCardAttrs> implements OnInit {
  @Input() model!: T;

  @Input() argument?: string;

  @ViewChild('container', { read: ViewContainerRef, static: true }) container!: ViewContainerRef;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  ngOnInit() {
    const arg = this.argument;
    switch (arg) {
      case 'model':
        this.createComponent(ModelCardAttrsComponent);
        break;
      default:
        this.createComponent(ModelCardAttrsComponent);
        break;
    }
  }

  private createComponent(componentType: Type<any>) {
    const factory = this.componentFactoryResolver.resolveComponentFactory(componentType);
    const componentRef = this.container.createComponent(factory);
    (componentRef.instance as any).model = this.model;
  }
}
