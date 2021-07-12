import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { access, CoreComponent } from '@rxweb/angular-router';

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.css']
})

@access({ accessLevel: 1, action: "get" })
export class CandidateComponent extends CoreComponent implements OnInit {
  courseFormGroup: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    super();
  }

  ngOnInit() {
    this.courseFormGroup = this.formBuilder.group({
      FirstName: [""],
      LastName: [""],
      EnrollmentNo: [""],
      CourseName: [""]
    });
  }
}
