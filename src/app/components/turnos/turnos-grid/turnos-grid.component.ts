import { Component, OnInit } from '@angular/core';

import { Turno } from 'src/app/class/Turno';
import { TurnosService } from 'src/app/services/turnos.service';

@Component({
  selector: 'app-turnos-grid',
  templateUrl: './turnos-grid.component.html',
  styleUrls: ['./turnos-grid.component.css']
})
export class TurnosGridComponent implements OnInit {

  p = 1;

  public turnos: Turno[] = [];

  constructor(private TurnoService: TurnosService) { }

  public generadorDeTurnos(intervalo: number) {
    // cuantos irtervalos por hora * 11 horas de atencion
    const cant = (60 / intervalo) * 11;
    let dia: string;

    for (let i = 0; i < cant; i++) {
      for (let j = 0; j < 7; j++) {
        if (j !== 6) {

          this.turnos.push({
            // le sumo un dia para qe queden los Turnos 
            fecha: this.sumarMinuts(i * intervalo + (1440) * j),
            dia: this.getNombreDia(j),
            profesional: 'genenic prof',
            especialidad: 'test esp',
          });
        }
      }
    }

    for (let i = 0; i < cant; i++) {
      for (let j = 7; j < 14; j++) {
        if (j !== 13) {
          this.turnos.push({
            fecha: this.sumarMinuts(i * intervalo + (1440) * j),
            dia: this.getNombreDia(j - 7),
            profesional: 'genenic prof',
            especialidad: 'test esp',
          });
        }
      }
    }
  }

  public getNombreDia(dia: number) {

    let ret: string;
    switch (dia) {
      case 0:
        ret = 'Lun';
        break;
      case 1:
        ret = 'Mar';
        break;
      case 2:
        ret = 'Mie';
        break;
      case 3:
        ret = 'Jue';
        break;
      case 4:
        ret = 'Vie';
        break;
      case 5:
        ret = 'Sab';
        break;
      case 6:
        ret = 'Dom';
        break;
      default:
        console.log("No existe!");
        break;
    }
    return ret;
  }

  public sumarDias(dias: number) {
    const fecha = new Date(this.getToday().getFullYear(), this.getToday().getMonth(), this.getToday().getDate(), 8, 0);
    fecha.setDate(fecha.getDate() + dias);

    return fecha;
  }

  public sumarMinuts(minuts: number) {
    return new Date(this.getMonday(this.getToday()).getTime() + minuts * 60000);
  }

  public fechaToString(fecha: Date) {
    const dia = fecha.getDate().toString();
    const mes = (fecha.getMonth() + 1).toString();
    const anio = fecha.getFullYear().toString();
    const hora = fecha.getHours() < 10 ? '0' + fecha.getHours().toString() : fecha.getHours().toString();
    const minutos = fecha.getMinutes() < 10 ? '0' + fecha.getMinutes().toString() : fecha.getMinutes().toString();

    return dia + '/' + mes + '/' + anio + ' ' + hora + ':' + minutos;
  }

  public getMonday(date: Date) {
    const day = date.getDay() || 7;
    if (day !== 1) {
      date.setHours(-24 * (day - 1));
    }
    // retorno el lunes 8:00 AM
    return new Date(date.getFullYear(), date.getMonth(), date.getDate(), 8, 0);
  }

  public getToday() {
    return new Date();
  }

  public scrollTop() {
    window.scroll(0, 0);
  }


  //  ABM :

  public addCarritoItem(Item: Turno) {
    this.TurnoService.addItem(Item);
  }

  public getCarritoItems() {
    this.TurnoService.getItems().subscribe(elements => {
      this.turnos = elements;
    });
  }

  public deleteCarritoItem(Item: Turno) {
    this.TurnoService.deleteItem(Item);
  }

  updateCantidadCarritoItem(item: Turno) {
    // item.cantidad = event.target.value;
    this.TurnoService.updateItem(item);
  }

  ngOnInit(): void {
    this.generadorDeTurnos(30);
    this.scrollTop();
  }

}
