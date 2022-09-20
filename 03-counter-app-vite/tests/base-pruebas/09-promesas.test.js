import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe('Pruebas en promesas', () => { 

    test('getHeroeByIdAsync should return a hero', (done) => {
        const id = 1;
    
        getHeroeByIdAsync(id)
            .then( hero => {
    
                expect( hero ).toEqual({
                    id: 1,
                    name: 'Batman',
                    owner: 'DC'
                });
    
                done();
            })
    })
    
});

describe('Pruebas en promesas', () => { 

    test('getHeroeByIdAsync should return an error if hero does not exist', (done) => {
        const id = 100;
    
        getHeroeByIdAsync(id)
            .then( hero => {
        
                expect( hero ).toBeFalsy();

                done();
            })
            .catch( error => {

                expect( error ).toBe(`No se pudo encontrar el héroe ${id}`);

                done();
            })
    })

});
