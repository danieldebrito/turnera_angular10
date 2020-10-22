import { Paciente } from './paciente';
import { Consulta } from './consulta';

export class HistoriaClinica {
    constructor(
        public id?: string,
        public paciente?: Paciente,
        public consulta?: Consulta
    ) {}
}
