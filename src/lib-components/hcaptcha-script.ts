import hCaptchaInstance  from './hCaptchaInstance'
import { IhCaptchaInstance } from './interface/IhCaptchaInstance'
/**
 * Used to prevent loading api.js multiple times
 * @type {string}
 */
 export const SCRIPT_ID: string = 'hcaptcha-api-script-id';

 /**
  * Async hcaptcha api.js loader.
  *
  * It makes sure `apiEndpoint` is loaded ONCE on the page despite calling this multiple times.
  *
  * Usage:
  * 1. import hcaptchaScript from './hcaptcha-script';
  * 2. when web component is mounted do:
  *      loadApiEndpointIfNotAlready('apiEndpoint', ...)
  *        .then(() => console.log('hcaptcha is loaded so it is safe to be used'))
  *        .catch((err) => console.error('failed to load the hcaptcha', err));
  *
  * @param config
  * @returns {Promise<void>}
  */
 export function loadApiEndpointIfNotAlready(config : hCaptchaInstance) : Promise<boolean> {
     if (window.hcaptcha !== undefined) {
         // api.js is already present
         return Promise.resolve(true);
     }
     if (document.getElementById(SCRIPT_ID)) {
         // api.js was already requested
         return Promise.resolve(true);
     }
     // request api.js once
     const scriptSrc = getScriptSrc(config);
     const script = document.createElement('script');
     script.id = SCRIPT_ID;
     script.src = scriptSrc;
     script.async = true;
     script.defer = true;
     script.onerror = (event) => {
         // eslint-disable-next-line no-console
         console.error('Failed to load api: ' + scriptSrc, event);
         return Promise.reject(new Error('Failed to load api.js'));
     };
     document.head.appendChild(script);
     return Promise.resolve(true);
 }
 
 export function getScriptSrc(config : hCaptchaInstance) {
     let scriptSrc = config.apiEndpoint;
     scriptSrc = addQueryParamIfDefined(scriptSrc, 'render', 'explicit');
     scriptSrc = addQueryParamIfDefined(scriptSrc, 'onload', config.onload);
     scriptSrc = addQueryParamIfDefined(scriptSrc, 'recaptchacompat', config.reCaptchaCompat === false ? 'off' : 'on');
     scriptSrc = addQueryParamIfDefined(scriptSrc, 'hl', config.language);
     scriptSrc = addQueryParamIfDefined(scriptSrc, 'sentry', config.sentry);
     scriptSrc = addQueryParamIfDefined(scriptSrc, 'endpoint', config.endpoint);
     scriptSrc = addQueryParamIfDefined(scriptSrc, 'assethost', config.assethost);
     scriptSrc = addQueryParamIfDefined(scriptSrc, 'imghost', config.imghost);
     scriptSrc = addQueryParamIfDefined(scriptSrc, 'reportapi', config.reportapi);
     return scriptSrc;
 }
 
 export function addQueryParamIfDefined(url: string, queryName: string, queryValue: string | boolean | undefined) {
     if (queryValue !== undefined && queryValue !== null) {
         const link = url.includes('?') ? '&' : '?';
         return url + link + queryName + '=' + encodeURIComponent(queryValue);
     }
     return url;
 }

 declare global {
    const hcaptcha: IhCaptchaInstance
  
    interface Window {
      hcaptcha: IhCaptchaInstance;
    }
  }