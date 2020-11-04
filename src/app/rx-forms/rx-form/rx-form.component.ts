import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-rx-form',
  templateUrl: './rx-form.component.html',
  styleUrls: ['./rx-form.component.scss']
})
export class RxFormComponent implements OnInit {
  submitted : boolean = false;
  studentForm = this.fb.group({
    firstname: ['', Validators.required],
    lastname: ['', [Validators.required, Validators.minLength(2)]]
  });
  constructor(private fb: FormBuilder) { }

  onSubmit () {
    this.submitted = true;
    //Call API (this service doesn't exist, just an example!)
    //this._apiservice.addStudent(this.studentForm.value).subscribe();
  }

  setForm () {
    this.studentForm.setValue({
      firstname: 'Ruddy',
      lastname: 'Ruddies'
    });
  }

  updateForm () {
    this.studentForm.patchValue({
      firstname: 'Leo'
    });
  }

  ngOnInit (): void {
    this.studentForm.valueChanges.subscribe(val => {
      console.log(val);
    });
    this.studentForm.get('firstname').valueChanges.subscribe(val => {
      console.log(val);
    });
  }

}
