import { Administrador } from 'src/app/class/administrador';

export class Profesional extends Administrador {
    constructor(
        public matricula?: string
    ) {
        super();
    }
}
