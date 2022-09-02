import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr";

describe('Pruebas en 07-deses-arr', () => {
    
    test('retornaArreglo return a string and a number', () => {
        
        const testArr = ['ABC', 123];
        const [ letters, numbers] = retornaArreglo();
        expect( letters ).toEqual( testArr[0] );
        expect( numbers ).toEqual( testArr[1] );

        expect( typeof letters ).toEqual( 'string' );
        expect( typeof numbers ).toEqual( 'number' );
        
    });

});
