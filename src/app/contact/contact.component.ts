/* Angular modules */
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

/* Services */
import {ContactFormService} from './services/contact-form.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;
  submitted = false;

  constructor(private contactFormService: ContactFormService) { }

  ngOnInit() {
    this.contactForm = this.contactFormService.buildForm();
  }

  get f() { return this.contactForm.controls; }

  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;

    const inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode !== 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  onSubmit() {
    this.submitted = true;

    if (this.contactForm.invalid) {
      return;
    }

    alert('Thanks for the touch !! :-)');
    this.contactForm.reset();
  }

}
