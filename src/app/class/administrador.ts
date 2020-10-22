import { Paciente } from 'src/app/class/paciente';

export class Administrador extends Paciente {
    constructor(
        public legajo?: string,
        public estado?: string
    ) {
        super();
    }
}
