import {  containsAsync, } from   "@rxweb/reactive-form-validators" 

import { of } from "rxjs" 

export class User {

	@containsAsync({validatorConfig:of({value:'@gmail.com'})}) 
	emailAddress: string;
	
	
	@containsAsync({validatorConfig:of({value:'@gmail.com'  ,message:'Please enter valid gmailId'})}) 
	otherEmailAddress: string;
	
	
	@containsAsync({validatorConfig:of({value:'@gmail.com'  ,messageKey:'containsMessageKey'})}) 
	organizationEmailAddress: string;
	
	
}
