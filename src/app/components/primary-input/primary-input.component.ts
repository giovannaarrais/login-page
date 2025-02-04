import { Component, Input, input } from '@angular/core';
import { ReactiveFormsModule, FormGroup } from '@angular/forms';

type InputTypes = "text" | "email" | "password";

@Component({
  selector: 'app-primary-input',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './primary-input.component.html',
  styleUrl: './primary-input.component.scss'
})
export class PrimaryInputComponent {
  @Input() formGroup!: FormGroup;
  @Input() type: InputTypes = "text";
  @Input() formName: string = "";
  @Input() placeholder: string = "";
  @Input() label: string = "";
}
