import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe('test in hook useFetchGifs', () => {
    
    test('should return the initial state', () => {
        
        // const {rerender, result, unmount} = renderHook( useFetchGifs('One Punch') );
        const {result} = renderHook( () => useFetchGifs('One Punch') );
        // console.log(result);
        const {images, isLoading} = result.current;

        expect( images.length ).toBe(0);
        expect( isLoading ).toBeTruthy();

    });

    test('should return an array of images and isLoading = false', async() => {
        const {result} = renderHook( () => useFetchGifs('One Punch') );
        await waitFor(
            () => expect( result.current.images.length ).toBeGreaterThan(0),
            {
                timeout: 3000,
            }
        );
        const {images, isLoading} = result.current;
        
        expect( images.length ).toBeGreaterThan(0);
        expect( isLoading ).toBeFalsy();
    });

});
