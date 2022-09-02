import { usContext } from "../../src/base-pruebas/06-deses-obj";

describe('Pruebas en 06-deses-obj', () => {
    test('usContext return an object', () => {
        
        const testObj = {
            clave: "123", 
            nombre: "Fernando", 
            edad: 27, 
            rango: "Capitán"
        };
        const testResult = {
            nombreClave: testObj.clave,
            anios: testObj.edad,
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            }
        };
        const result = usContext( testObj );
        expect( result ).toEqual( testResult );
                
    });

});
