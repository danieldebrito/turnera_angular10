import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-turnos-board',
  templateUrl: './turnos-board.component.html',
  styleUrls: ['./turnos-board.component.css']
})
export class TurnosBoardComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {

  }
}
