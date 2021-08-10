import '@testing-library/jest-dom';
import { renderHook, act } from '@testing-library/react-hooks';

import useCounter from 'hooks/useCounter';

describe('Test on useCounter hook', () => {
  it('should return values by default', () => {
    const { result } = renderHook(() => useCounter());
    const { counter, increment, decrement, reset } = result.current;

    expect(counter).toBe(10);
    expect(typeof increment).toBe('function');
    expect(typeof decrement).toBe('function');
    expect(typeof reset).toBe('function');
  });

  it('should have the counter at 100', () => {
    const { result } = renderHook(() => useCounter(100));
    const { counter } = result.current;

    expect(counter).toBe(100);
  });

  it('should increment the counter by 1', () => {
    const { result } = renderHook(() => useCounter(100));
    const { increment } = result.current;

    act(() => increment());
    const { counter } = result.current;

    expect(counter).toBe(101);
  });

  it('should decrement the counter by 1', () => {
    const { result } = renderHook(() => useCounter(100));
    const { decrement } = result.current;

    act(() => decrement());
    const { counter } = result.current;

    expect(counter).toBe(99);
  });

  it('should reset the counter to the initial value', () => {
    const initialValue = 100;
    const { result } = renderHook(() => useCounter(initialValue));
    const { increment, reset } = result.current;

    act(() => {
      increment();
      reset();
    });
    const { counter } = result.current;

    expect(counter).toBe(initialValue);
  });
});
