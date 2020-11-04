import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-member-form',
  templateUrl: './member-form.component.html',
  styleUrls: ['./member-form.component.scss']
})
export class MemberFormComponent implements OnInit {
  submitted: boolean = false;
  studentForm = this.fb.group({
    name: ['voornaam achternaam', Validators.required],
    dob: ['', [Validators.required, Validators.minLength(2)]]
  });
  constructor(private fb: FormBuilder) { }

  onSubmit () {
    this.submitted = true;
    //Call API (this service doesn't exist, just an example!)
    //this._apiservice.addStudent(this.studentForm.value).subscribe();
  }

  ngOnInit(): void {
  }

}
