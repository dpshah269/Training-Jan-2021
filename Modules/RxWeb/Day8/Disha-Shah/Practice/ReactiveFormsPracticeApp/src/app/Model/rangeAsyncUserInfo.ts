import {  rangeAsync, } from   "@rxweb/reactive-form-validators" 

import { of } from "rxjs" 

export class EmployeeInfo {

	@rangeAsync({validatorConfig:of({minimumNumber:18  ,maximumNumber:60})}) 
	age: number;
	
	
	@rangeAsync({validatorConfig:of({minimumNumber:1000  ,maximumNumber:200000  ,message:'Your Salary should be between 1000 to 200000.'})}) 
	salary: number;
	
	
	@rangeAsync({validatorConfig:of({minimumNumber:1  ,maximumNumber:10  ,messageKey:'rangeMessageKey'})}) 
	noOfprojects: number;
	
	
}
