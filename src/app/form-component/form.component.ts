import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import {
  FormControl,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'email-form',
  templateUrl: 'form.component.html',
  styleUrls: ['form-component.css'],
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    RouterOutlet,
  ],
})
export class FormComponent implements AfterViewInit {
  email = new FormControl('', [Validators.required, Validators.email]);
  text = new FormControl('', Validators.required);
  valueText = 'hey';
  getEmailErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  getInputErrorMessage() {
    if (this.text.hasError('required')) {
      return 'fill this input please';
    }
    return this.text.hasError('text') ? this.text.disable : '';
  }
  @ViewChild('inputText', { static: true }) inputText: ElementRef;
  constructor(inputText: ElementRef) {
    this.inputText = inputText;
  }
  ngAfterViewInit(): void {
    console.log(this.valueText);
    console.log(
      `this is what you been looking for ************${typeof this
        .inputText}*************`
    );
    this.inputText.nativeElement.value = this.valueText;
  }
  onFormSubmit() {
    console.log(this.email.value);
    console.log(this.text.value);
  }
}
