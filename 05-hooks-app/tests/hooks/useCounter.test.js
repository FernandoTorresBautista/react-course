import { act, renderHook } from "@testing-library/react";
import { useCounter } from './../../src/hooks/useCounter';

describe('useCounter test', () => {
    
    test('should return default values', () => {
        const {result} = renderHook(() => useCounter());
        // console.log(result);

        const { counter, increment, decrement, reset } = result.current;
        expect( counter ).toBe(10);
        expect( increment ).toEqual( expect.any(Function) );
        expect( decrement ).toEqual( expect.any(Function) );
        expect( reset ).toEqual( expect.any(Function) );
    });

    test('should return the counter with value equal to 100', () => {
        const {result} = renderHook(() => useCounter(100));

        // const { counter } = result.current;
        // expect( counter ).toBe(100);

        expect( result.current.counter ).toBe(100);
    });

    test('should increment the counter', () => {
        const {result} = renderHook(() => useCounter(100));

        const { increment } = result.current;

        act( ()=> {
            increment();
            increment(2);
        });
        
        expect( result.current.counter ).toBe(103);
    });

    test('should decrement the counter', () => {
        const {result} = renderHook(() => useCounter(100));

        const { decrement } = result.current;

        act( ()=> {
            decrement();
            decrement(2);
        });
        
        expect( result.current.counter ).toBe(97);
    });

    test('should reset the counter', () => {
        const {result} = renderHook(() => useCounter(100));

        const { reset, increment, decrement } = result.current;

        act( ()=> {
            increment(10);
            decrement(2);
            reset();
        });
        
        expect( result.current.counter ).toBe(100);
    });
})