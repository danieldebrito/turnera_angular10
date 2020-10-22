import { Encuesta } from './encuesta';

export class Turno {
    constructor(
        public id?: string,
        public fecha?: Date,
        public dia?: string,
        public profesional?: string,
        public especialidad?: string,
        public estado?: estados,
        public motivoRechazo?: string,
        public encuesta?: Encuesta,
    ) { }
}


enum estados {
    aceptado = 'aceptado',
    rechazado = 'recahazado',
    cumplido = 'cumplido',
    anulado = 'anulado',
    ocupado = 'ocupado',
    disponible = 'disponible'
}
