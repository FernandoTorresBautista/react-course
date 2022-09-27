import { getImagen } from "../../src/base-pruebas/11-async-await";

describe('test with 11-async-await test', () => {
    
    test('getImagen should return an url of a image', async() => {

        const url = await getImagen();
        // console.log(url);

        expect( typeof url ).toBe('string');
    });

});
