import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RatingsComponent } from "../ratings/ratings.component";
@Component({
    selector: 'app-tab4',
    templateUrl: './tab4.page.html',
    styleUrls: ['./tab4.page.scss'],
    standalone: true,
    imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule, RatingsComponent]
})
export class Tab4Page implements OnInit {
  feedbackForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.feedbackForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      ucid: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
      feedback: ['', Validators.required]
    });
  }

  get ucid() {
    return this.feedbackForm.get('ucid');
  }

  onUcidInput(event: any) {
    const input = event.target as HTMLInputElement;
    const value = input.value.replace(/\D/g, ''); // remove non-numeric characters
    input.value = value;
    this.ucid!.setValue(value, { emitEvent: false });
  }

  onSubmit() {
    if (this.feedbackForm.valid) {
      console.log(this.feedbackForm.value);
    }
  }
}
