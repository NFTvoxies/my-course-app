import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector:'app-home',
  templateUrl:'home.component.html'

})

export class HomeComponent {

  title = 'my-course-app';
  headerTitle='this is a header title';
  isHeadervisible=true;


  name: string | undefined ;
  surname: string | undefined;

  formGroup: FormGroup | undefined;

  constructor(
    private formBuilder: FormBuilder
  ){

  }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      name:[ undefined , Validators.required],
      surname: undefined,
    })

  }

  onFormSubmit(): void{
    console.log(this.formGroup?.value)
    console.log(this.formGroup?.value)

  }


}
