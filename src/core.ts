interface ErrorResponse {
  status: number;
  error: string;
  message: string;
  url: string;
}

export function isResponseOk<T>(response: T | ErrorResponse): response is T {
  return !(response as ErrorResponse).hasOwnProperty('error');
}

export async function take<T = any>(
  url: string,
  reqParams?: RequestInit
): Promise<T | ErrorResponse> {
  return fetch(url, reqParams).then(r => {
    if (r.status === 200) {
      return r.json();
    }
    return {
      status: r.status,
      error: 'Fetch failed !',
      message: r.statusText,
      url: r.url
    };
  });
}
