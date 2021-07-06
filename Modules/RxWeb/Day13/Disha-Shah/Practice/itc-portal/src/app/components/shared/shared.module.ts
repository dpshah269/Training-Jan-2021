import { RxRoutingModule } from '@rxweb/angular-router';
import { NgModule } from '@angular/core';
import { RxDatePickerModule } from '@rxweb/angular/datepicker';
import { RxFocusModule } from '@rxweb/angular/focus';
import { RxMaskModule } from '@rxweb/angular/mask';
import { RxSpinnerModule } from '@rxweb/angular/spinner';
import { RxTagModule } from '@rxweb/angular/tag';
import { RxSelectModule } from '@rxweb/angular/select';
import { RxTranslateModule } from '@rxweb/translate';


@NgModule({
    exports: [RxFocusModule, RxSpinnerModule, RxDatePickerModule, RxMaskModule, RxSelectModule,RxTranslateModule,
        RxTagModule, RxRoutingModule],
    declarations: []
})
export class SharedModule { }
