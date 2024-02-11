import { checkReponse, request } from './api';

describe('checkReponse', () => {
  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('should return json response if response is ok', async () => {
    const mockJson = { message: 'ok' };
    const mockResponse = {
      ok: true,
      json: () => Promise.resolve(mockJson),
    };

    const result = await checkReponse(mockResponse as Response);

    expect(result).toEqual(mockJson);
  });

  it('should reject with error if response is not ok', async () => {
    const mockError = { message: 'Error' };
    const mockResponse = {
      ok: false,
      json: () => Promise.resolve(mockError),
    };

    await expect(checkReponse(mockResponse as Response)).rejects.toEqual(mockError);
  });
});

describe('request', () => {
  it('should make request with default options if none provided', async () => {
    const mockJson = { message: 'ok' };

    jest.spyOn(global, 'fetch').mockResolvedValue({
      ok: true,
      json: () => Promise.resolve(mockJson),
    } as Response);

    const result = await request({ url: 'https://example.com' });
    expect(fetch).toBeCalledWith('https://example.com', undefined);
    expect(result).toEqual(mockJson);
  });

  it('should reject if fetch throws error', async () => {
    jest.spyOn(global, 'fetch').mockRejectedValue(new Error('Fetch error'));

    await expect(request({ url: 'https://example.com' })).rejects.toThrow('Fetch error');
  });
});
