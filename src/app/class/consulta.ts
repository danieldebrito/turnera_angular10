import { Turno } from './Turno';

export class Consulta {
    constructor(
        public turno?: Turno,
        public alcohol?: string,
        public drogas?: string,
        public sueño?: string,
        public tabaco?: string,
        public infusiones?: string,
        public alimentacion?: string,
        public temperatura?: string,
        public altura?: string,
        public peso?: string,
        public motivoConsulta?: string,
        public antecedentes?: string,
        public diasnogtico?: string
    ) { }
}
