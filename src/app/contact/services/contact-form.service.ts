/* Angular modules */
import { Injectable } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ContactFormService {

  constructor(private formbuilder: FormBuilder) { }

  buildForm(): FormGroup {
    return this.formbuilder.group({
      'firstName': ['', Validators.required],
      'lastName': ['', Validators.required],
      'email': ['', [
        Validators.required,
        Validators.email
      ]],
      'phone': ['', [Validators.minLength(10), Validators.maxLength(10)]],
      'msg': ['', Validators.required],
    });
  }
}
