import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from "@angular/forms"
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
  selector: 'app-extension-add-validator',
  templateUrl: './extension-add-validator.component.html',
  styleUrls: ['./extension-add-validator.component.css']
})
export class ExtensionAddValidatorComponent implements OnInit {

  userInfoFormGroup: FormGroup

				fileTypes = [ "Picture", "Document",];
	
	constructor(
        private formBuilder: FormBuilder )
	{ }

    ngOnInit() {
        this.userInfoFormGroup = this.formBuilder.group({
            fileType:['',], 
            profilePicture:['', RxwebValidators.extension({extensions:['jpg','bmp'] })], 
            profileImage:['', RxwebValidators.extension({extensions:['jpg','bmp']  ,isExcludeExtensions:true })], 
            imageFile:['', RxwebValidators.extension({extensions:['jpg','bmp']  ,conditionalExpression:'x => x.fileType == "Picture"' })], 
            documentFile:['', RxwebValidators.extension({extensions:['doc','docx']  ,conditionalExpression:'(x,y) => x.fileType == "Document"' })], 
            contactFile:['', RxwebValidators.extension({extensions:['vcf']  ,message:'You can upload only .vcf files.' })], 
            excelFile:['', RxwebValidators.extension({extensions:['xls','xlsx']  ,messageKey:'extensionMessageKey' })], 
        });
    }

}
