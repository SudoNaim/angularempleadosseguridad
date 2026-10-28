// "idEmpleado": number
// 		"apellido": string
// 		"oficio": string
// 		"salario": number
// 		"director": number

export default class Empleado {
    constructor(
        public idEmpleado: number,
        public apellido: string,
        public oficio: string,
        public salario: number,
        public director: number
    ) { }
}