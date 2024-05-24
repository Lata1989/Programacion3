export class Cliente{
    nombre: string | undefined
    apellido: string | undefined
    edad: number = 0
    cuit: string | undefined

    constructor(){
        this.nombre = '-'
    }

    fullName(): string {
        return this.nombre + ', ' + this.apellido + '.';
    }

    edadToString() {
        return this.edad + ' años.';
    }

    // Listo
}