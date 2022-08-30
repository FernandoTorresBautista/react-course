
describe('Pruebas en <DemoComponent />', () => {
    test('this test should not fail', () => {
        // 1 inicializacion 
        const message1 = 'Hola mundo'; 
    
        // 2 estimulo
        const message2 = message1.trim();
     
        // 3 observar el comportamiento
        expect(message1).toBe(message2);
    
    });
});
