import {} from 'dotenv/config';
import Raven from 'raven-js';
// import KEYS from '../../config/keys_dev.js';
import Keystest from '../../keys';
//TODO get keys from .env file
// console.log(Keystest);
const sentry_key = "5e629f0c9e2248e0811e3d6abfd2ca5a";

const sentry_app = '1234579';
export const sentry_url = `https://${sentry_key}@sentry.io/${sentry_app}`;

export function logException(ex, context) {
  Raven.captureException(ex, {
    extra: context
  });
  /*eslint no-console:0*/
  window && window.console && console.error && console.error(ex);
}
