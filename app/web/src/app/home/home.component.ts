import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { EncoderApiService } from '../_services/encoder.api';

@Component({ templateUrl: 'home.component.html', styleUrls: ['./home.component.css'] })
export class HomeComponent implements OnInit {
  homeForm: FormGroup;
  loading = false;
  encodedTerm: string;
  error = false;

  constructor(
    private formBuilder: FormBuilder,
    private encoderService: EncoderApiService,
  ) {

  }

  ngOnInit() {
    this.homeForm = this.formBuilder.group({
      term: ['', Validators.required],
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.homeForm.controls; }

  get e() { return this.error }

  get displayString() { return this.encodedTerm }

  onSubmit() {
    this.encodedTerm = '';
    if (this.homeForm.invalid) {
      return;
    }

    this.loading = true;

    this.encoderService.encode(this.f.term.value)
      .pipe(first())
      .subscribe(
        data => {
          this.encodedTerm = data.encodedString;
          this.loading = false;
        },
        error => {
          this.error = true;
          this.loading = false;
        });
  }
}