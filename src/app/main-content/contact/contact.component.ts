import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  http = inject(HttpClient);

  contactData = {
    name: "",
    email: "",
    message: "",
    privacy: false
  };

  toastmessage = false;

  mailTest = false;

  post = {
    endPoint: 'https://alberding-schulz.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
      this.http.post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {

            ngForm.resetForm();

          },
          error: (error) => {
            console.error(error);
          },
          complete: () => {
            this.toggleToastMessage();
          }
          ,
        });
    } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {

      ngForm.resetForm();
    }
  }

  toggleToastMessage() {
    this.toastmessage = !this.toastmessage;
    setTimeout(() => {
      this.toastmessage = !this.toastmessage;
    }, 2000)
  }

  saveData() {
    sessionStorage.setItem('contactForm', JSON.stringify(this.contactData))
  }

  ngOnInit() {
    this.loadFromSessionStorage();
  }

  loadFromSessionStorage() {
    const savedItem = sessionStorage.getItem('contactForm');
    if (savedItem) {
      const parsed = JSON.parse(savedItem);
      this.contactData.name = parsed.name;
      this.contactData.email = parsed.email;
      this.contactData.message = parsed.message;
      this.contactData.privacy = parsed.privacy;
    }
  }



}
