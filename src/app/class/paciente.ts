export class Paciente {
    constructor(
        public id?: string,
        public nombre?: string,
        public apellido?: string,
        public dni?: number,
        public email?: string,
        public password?: string,
        public imgFoto?: string,
        public imgAvatar?: string
    ) { }
}
