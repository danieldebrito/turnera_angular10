import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

interface Especialidad {
  value: string;
  viewValue: string;
}

interface EspecialidadGroup {
  disabled?: boolean;
  name: string;
  pokemon: Especialidad[];
}


interface Profecional {
  value: string;
  viewValue: string;
}

interface ProfecionalGroup {
  disabled?: boolean;
  name: string;
  pokemon: Especialidad[];
}

@Component({
  selector: 'app-turnos-reservar',
  templateUrl: './turnos-reservar.component.html',
  styleUrls: ['./turnos-reservar.component.css']
})
export class TurnosReservarComponent implements OnInit {

  constructor() { }

  especialidadControl = new FormControl();

  especialidadGroups: EspecialidadGroup[] = [
    {
      name: 'Especialidad',
      pokemon: [
        {value: 'bulbasaur-0', viewValue: 'Pediatria'},
        {value: 'oddish-1', viewValue: 'Odontologia'},
        {value: 'bellsprout-2', viewValue: 'Ginecologia'},
        {value: 'bulbasaur-0', viewValue: 'Kinesiologia'},
        {value: 'oddish-1', viewValue: 'Oftalmologia'},
        {value: 'bellsprout-2', viewValue: 'Traumatologia'}
      ]
    },
    {
      name: 'Laboratorio',
      pokemon: [
        {value: 'squirtle-3', viewValue: 'Analisis Clinicos'},
        {value: 'psyduck-4', viewValue: 'Hematologia'}
      ]
    }
  ];

  especialidadControl2 = new FormControl();

  especialidadGroups2: EspecialidadGroup[] = [
    {
      name: 'Profecional',
      pokemon: [
        {value: 'bulbasaur-0', viewValue: 'Dra. Ana Maria Puccio'},
        {value: 'oddish-1', viewValue: 'Dr. Federico Nieztche'},
        {value: 'bellsprout-2', viewValue: 'Dr. Daniel Pascual'},
        {value: 'bulbasaur-0', viewValue: 'Dra. Laura Hidalgo'},
        {value: 'oddish-1', viewValue: 'Dra. Rosana Mondragon'},
        {value: 'bellsprout-2', viewValue: 'Dr. Ricardo Garcia'}
      ]
    }
  ];

  ngOnInit(): void {
  }

}
