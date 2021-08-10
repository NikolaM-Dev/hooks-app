import '@testing-library/jest-dom';
import { renderHook } from '@testing-library/react-hooks';

import useFetch from 'hooks/useFetch';

describe('Test on useFetch hook', () => {
  const URL = 'https://www.breakingbadapi.com/api/quotes/1';

  it('should return the information by default', () => {
    const { result } = renderHook(() => useFetch({ url: URL }));
    const { data, loading, error } = result.current;

    expect(data).toBeNull();
    expect(error).toBeNull();
    expect(loading).toBeTruthy();
  });

  it('should return the desired information, loading in false, error in false', async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch({ url: URL })
    );

    await waitForNextUpdate();
    const { data, loading, error } = result.current;

    expect(data).toHaveLength(1);
    expect(loading).toBeFalsy();
    expect(error).toBeNull();
  });

  it('should handle the error', async () => {
    const url = 'https://reqres.in/apid/users?page=2';
    const { result, waitForNextUpdate } = renderHook(() => useFetch({ url }));

    await waitForNextUpdate();
    const { data, loading, error } = result.current;

    expect(data).toBeNull();
    expect(loading).toBeFalsy();
    expect(error).toBe('The information could not be loaded');
  });
});
