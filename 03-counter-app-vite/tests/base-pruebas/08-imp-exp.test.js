import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";

describe('Prueba en 08-imp-exp', () => { 
    
    test('getHeroeById should return an hero ID', () => {
        
        const id = 1; 
        const hero = getHeroeById(id);

        expect( hero ).toEqual({ id: 1, name: 'Batman', owner: 'DC' });

    });
    
    test('getHeroeById should return undefined if id does not exist', () => {
        
        const id = 100; 
        const hero = getHeroeById(id);

        expect( hero ).toBeFalsy();
        expect( hero ).toBe(undefined);

    });
    
    test('getHeroeByOwner should return an array of DC heroes', () => {
        
        const owner = "DC"; 
        const heroes = getHeroesByOwner(owner);

        expect( heroes.length ).toBe( 3 );

        const resultExpected = [
            {
                id: 1,
                name: 'Batman',
                owner: 'DC'
            },
            {
                id: 3,
                name: 'Superman',
                owner: 'DC'
            },
            {
                id: 4,
                name: 'Flash',
                owner: 'DC'
            },
        ]
        expect( heroes ).toEqual( resultExpected );

    });
    
    test('getHeroeByOwner should return an array of Marvel heroes', () => {
        
        const owner = "Marvel"; 
        const heroes = getHeroesByOwner(owner);

        expect( heroes.length ).toBe( 2 );

        const resultExpected = [
            {
                id: 2,
                name: 'Spiderman',
                owner: 'Marvel'
            },
            {
                id: 5,
                name: 'Wolverine',
                owner: 'Marvel'
            },
        ]
        expect( heroes ).toEqual( resultExpected );

    });
    
});