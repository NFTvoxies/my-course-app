import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
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

