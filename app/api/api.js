
export const BASE_URL = process.env.apiUrl ? process.env.apiUrl : 'http://mymonty.localhost/api';

export const FAQ_API = `${BASE_URL}/get-faqs`;
export const TERMS_API = `${BASE_URL}/get-legals/terms`;
export const PRIVACY_API = `${BASE_URL}/get-legals/privacy`;
export const COOKIE_API = `${BASE_URL}/get-legals/cookie`;
export const NEWS_API = `${BASE_URL}/get-news`;

