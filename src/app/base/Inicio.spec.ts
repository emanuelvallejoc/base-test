import { dos, Primeros, Tres } from "./Inicio";

describe('Probando Inicio', () => {
    it('Probando Primeros', () => {
        const resultado = Primeros();
        // toEqual para verificar que los datos sean exactamente iguales
        expect(resultado).toEqual('Hola que hace');
    });

    it('debe retornar una cadena que contenga el argumento', () => {
        const resultado = dos('Sofka');
        expect(resultado).toEqual('Hola Sofka');
        // toContain es para verificar si contiene parte de la cadena que necesita
        expect(resultado).toContain('Sofka');
    });

    it('se debe agregar el argumento al arreglo', () => {
        const resultado = Tres('SofkU');
        expect(resultado).toContain('SofkU');
        // toBe es para validar en este caso que el arreglo tenga la cantidad de elementos de 3 despues del agregado
        expect(resultado.length).toBe(3);
    })
})
