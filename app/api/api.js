
export const BASE_URL = process.env.apiUrl ? process.env.apiUrl : 'https://staging.mymonty.com';

export const FAQ_API = `${BASE_URL}/get-faqs`;
export const TERMS_API = `${BASE_URL}/get-legals/terms`;
export const PRIVACY_API = `${BASE_URL}/get-legals/privacy`;
export const COOKIE_API = `${BASE_URL}/get-legals/cookie`;

