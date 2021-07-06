
import { Component, ElementRef, ViewContainerRef } from '@angular/core';
import { ModalView } from 'src/app/domain/customize-design/modal';

@Component({
    selector: 'app-popup',
    template: '',
})
export class AppPopupComponent {
    constructor(
        public viewContainerRef: ViewContainerRef,
        public modalView: ModalView,
        elementRef: ElementRef
    ) {
        this.modalView.viewContainerRef = viewContainerRef;
        this.modalView.element = elementRef.nativeElement;
    }
}

