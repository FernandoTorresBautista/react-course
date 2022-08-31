import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe('Pruebas en 05-funciones', () => {
    test('getUser return and object', () => {
        
        const testUser = {
            uid: 'ABC123',
            username: 'test_username'
        };
        const resultGetUser = getUser();
        expect( resultGetUser.uid ).toBe( "ABC123" ); 
        expect( resultGetUser.username ).toBe( "test_username" ); 

        expect( resultGetUser ).toEqual( testUser );
                
    });

    test('getUsuarioActivo return and object', () => { 

        const name = "Fernando";
        const resultGetUsuarioActivo = getUsuarioActivo(name)
        expect( resultGetUsuarioActivo.uid ).toBe( "ABC567" ); 
        expect( resultGetUsuarioActivo.username ).toBe( name ); 

        expect( resultGetUsuarioActivo ).toStrictEqual({
            uid: 'ABC567',
            username: name
        });

    });

});
