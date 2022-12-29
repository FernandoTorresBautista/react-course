import { act, renderHook } from "@testing-library/react";
import { useForm } from './../../src/hooks/useForm';

describe('useForm tests', () => {
    
    const initialForm = {
        name: 'Fernando',
        email: 'fernando@gmail.com',
    }

    test('should return default values', () => {
        const {result} = renderHook(() => useForm(initialForm));
        console.log(result.current);
        expect(result.current).toEqual({
            name: 'Fernando',
            email: 'fernando@gmail.com',
            formState: initialForm,
            onInputChange: expect.any( Function ),
            onResetForm: expect.any( Function )
        });
    });

    test('should return default values', () => {
        const {result} = renderHook(() => useForm(initialForm));
        // console.log(result.current);
        const {onInputChange} = result.current;
        const newValue = "Juan";

        act(()=>{
            onInputChange({target: {name: "name", value:newValue}});
        });

        expect(result.current.name).toBe(newValue);
        expect(result.current.formState.name).toBe(newValue);

    });

    test('should reset the form to the default values', () => {
        const {result} = renderHook(() => useForm(initialForm));
        const {onInputChange, onResetForm} = result.current;
        const newValue = "Juan";

        act(()=>{
            onInputChange({target: {name: "name", value:newValue}});
            onResetForm();
        });

        expect(result.current.name).toBe(initialForm.name);
        expect(result.current.formState.name).toBe(initialForm.name);

    });

});
