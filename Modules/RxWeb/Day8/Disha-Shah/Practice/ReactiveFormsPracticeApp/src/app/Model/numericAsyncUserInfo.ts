import {  numericAsync,prop, NumericValueType, } from   "@rxweb/reactive-form-validators" 

import { of } from "rxjs" 

export class UserInfo {

	@prop()
	dataType: string;

	@numericAsync({acceptValue:NumericValueType.NegativeNumber }) 
	negativeNumber: number;
	
	
	@numericAsync({isFormat:true }) 
	totalAmount: number;
	
	
	@numericAsync({allowDecimal:true }) 
	decimalNumber: number;
	
	
	@numericAsync({message:'{{0}} is not a positive number' }) 
	positiveNumber: number;
	
	
	@numericAsync({messageKey:'numericMessageKey' }) 
	positiveNonDecimalNumber: number;
	
	
}
