import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, NgForm } from '@angular/forms';

@Component({
  selector: 'app-member-form',
  templateUrl: './member-form.component.html',
  styleUrls: ['./member-form.component.scss']
})
export class MemberFormComponent implements OnInit {
  submitted: boolean = false;
  date: string = "";
  memberForm = this.fb.group({
    name: ['', Validators.required],
    dob: ['', Validators.required],
    address: ['', Validators.required]
  });
  constructor(private fb: FormBuilder) { }

  onSubmit () {
    this.submitted = true;
    console.log(this.memberForm.value);
    let values = this.memberForm.value;
    var newMember = {
      name: values.name,
      dob: values.dob,
      address: values.address
    }
    
    //Call API (this service doesn't exist, just an example!)
    //this._apiservice.addStudent(this.studentForm.value).subscribe();
  }

  ngOnInit(): void {
  }

}
