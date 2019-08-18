import { isResponseOk } from '../core';

it('isResponseOk', () => {
  expect(isResponseOk({ ok: true, status: 200 })).toEqual(true);
  expect(isResponseOk({ error: 'Server failed', status: 500 })).toEqual(false);
});
