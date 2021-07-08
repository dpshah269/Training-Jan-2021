import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RxReactiveFormsModule } from '@rxweb/reactive-form-validators';

@NgModule({
    imports: [CommonModule, FormsModule, ReactiveFormsModule, RxReactiveFormsModule]
})

export class AuthenticationSharedModule { }


