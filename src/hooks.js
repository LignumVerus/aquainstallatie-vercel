import * as cookie from 'cookie';
import { locale } from 'svelte-i18n';

/** @type {import('@sveltejs/kit').Handle} */
export const handle = async ({ event, resolve }) => {
  const cookies = cookie.parse(event.request.headers.get('cookie') || '');
  event.locals.userid = cookies['userid'] || crypto.randomUUID();

  // Set locale from accept-language header
  const lang = event.request.headers.get('accept-language')?.split(',')[0];
  if (lang) {
    locale.set(lang);
  }

  const response = await resolve(event);

  if (!cookies['userid']) {
    // if this is the first time the user has visited this app,
    // set a cookie so that we recognise them when they return
    response.headers.set(
      'set-cookie',
      cookie.serialize('userid', event.locals.userid, {
        path: '/',
        httpOnly: true
      })
    );
  }

  return response;
};
