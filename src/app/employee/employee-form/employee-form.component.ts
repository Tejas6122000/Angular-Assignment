import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {
  registrationForm = this.fb.group({
    name:['', [Validators.required,Validators.minLength(4)]],
    email:['', [Validators.required, Validators.email]],
    phone:['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
    address:['', Validators.required],
    dob:['', Validators.required]
  });
  constructor(private fb: FormBuilder) { }


  onSubmit(){
    console.log(this.registrationForm.value)
  }

  ngOnInit(): void {
  }

}
