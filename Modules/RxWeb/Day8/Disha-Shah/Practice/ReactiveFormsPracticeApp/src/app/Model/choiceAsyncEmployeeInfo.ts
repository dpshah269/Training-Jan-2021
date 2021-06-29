import { prop, choiceAsync } from "@rxweb/reactive-form-validators"; 
import { of } from "rxjs"; 

export class EmployeeInfo {

  @prop()
  department: string;

  @choiceAsync({validatorConfig:of({ minLength: 2 })})
  projectDomains: string;

  @choiceAsync({validatorConfig:of({ maxLength: 4 })})
  qualifications: string[];

  @choiceAsync({validatorConfig:of({ minLength: 2, conditionalExpression: (x, y) => x.department == "DotNet" })})
  languages: string[];

  @choiceAsync({validatorConfig:of({ minLength: 2, conditionalExpression: "x => x.department =='DotNet'" })})
  skills: string;

  @choiceAsync({validatorConfig:of({ maxLength: 4, message: "You can select upto 4 hobbies" })})
  hobbies: string;

  @choiceAsync({validatorConfig:of({ minLength: 4, messageKey: 'choiceMessageKey' })})
  certifications: string;
}
