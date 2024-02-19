import { Component, Input, OnInit, ComponentFactoryResolver, ViewContainerRef, ViewChild, Type } from '@angular/core';
import { WorkIdComponent } from './card-workID/component';
import { ModelCardAttrsComponent } from './card-product/component';

export interface ModelCardAttrs {
  name: string;
  category: string;
}

export interface WorkId extends ModelCardAttrs {
  modelId: string;
}
export interface color extends ModelCardAttrs {
  color: string
}

@Component({
  selector: 'card-item',
  template: `
    <ng-container #container></ng-container>
  `,
})
export class CardItemComponent<T extends ModelCardAttrs | WorkId | color> implements OnInit {
  @Input() item!: T;

  @ViewChild('container', { read: ViewContainerRef, static: true }) container!: ViewContainerRef;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  ngOnInit() {
    const isWorkId = 'modelId' in this.item;

    if (isWorkId) {
      this.createComponent(WorkIdComponent);
    } else {
      this.createComponent(ModelCardAttrsComponent);
    }
    
  }

  private createComponent(componentType: Type<any>) {
    const factory = this.componentFactoryResolver.resolveComponentFactory(componentType);
    const componentRef = this.container.createComponent(factory);

    // Use type assertion here
    (componentRef.instance as any).item = this.item;
  }
}