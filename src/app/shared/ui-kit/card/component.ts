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


@Component({
  selector: 'card-item',
  template: `
    <ng-container #container></ng-container>
  `,
})
export class CardItemComponent<T extends ModelCardAttrs | WorkId > implements OnInit {
  @Input() item!: T;
  @Input() argument?: string

  @ViewChild('container', { read: ViewContainerRef, static: true }) container!: ViewContainerRef;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  ngOnInit() {
    const arg = this.argument;
    
    switch(arg) {
      case 'modelId':
        this.createComponent(WorkIdComponent);
        break;
      default:
        this.createComponent(ModelCardAttrsComponent);
        break;
    }
  }

  private createComponent(componentType: Type<any>) {
    const factory = this.componentFactoryResolver.resolveComponentFactory(componentType);
    const componentRef = this.container.createComponent(factory);

    // Use type assertion here
    (componentRef.instance as any).item = this.item;
  }
}
