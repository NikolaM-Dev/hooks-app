import '@testing-library/jest-dom';
import { act, renderHook } from '@testing-library/react-hooks';

import useForm from 'hooks/useForm';

describe('Tests on useForm hook', () => {
  const initialForm = {
    name: 'Nikola',
    email: 'nikola@gmail.com',
  };

  it('should return to default form', () => {
    const { result } = renderHook(() => useForm(initialForm));
    const { values, reset, handleInputChange } = result.current;

    expect(values).toEqual(initialForm);
    expect(typeof reset).toBe('function');
    expect(typeof handleInputChange).toBe('function');
  });

  it('should change the form values (name)', () => {
    const { result } = renderHook(() => useForm(initialForm));
    const { handleInputChange } = result.current;

    act(() =>
      handleInputChange({
        target: {
          name: 'name',
          value: 'Melissa',
        },
      })
    );

    const { values } = result.current;

    expect(values).toEqual({ ...initialForm, name: 'Melissa' });
  });

  it('should set the form with the reset function', () => {
    const { result } = renderHook(() => useForm(initialForm));
    const { handleInputChange, reset } = result.current;

    act(() => {
      handleInputChange({
        target: {
          name: 'name',
          value: 'Melissa',
        },
      });

      reset();
    });

    const { values } = result.current;
    expect(values).toEqual(initialForm);
  });
});
