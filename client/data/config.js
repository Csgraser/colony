import Raven from 'raven-js';
import KEYS from '../../config/keys_prod.js';

const sentry_key = KEYS.sentry_key;

const sentry_app = '1234579';
export const sentry_url = `https://${sentry_key}@sentry.io/${sentry_app}`;

export function logException(ex, context) {
  Raven.captureException(ex, {
    extra: context
  });
  /*eslint no-console:0*/
  window && window.console && console.error && console.error(ex);
}
