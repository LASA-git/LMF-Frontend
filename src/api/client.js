const API_URL = (import.meta.env.VITE_API_URL || 'http://localhost:3000').replace(/\/$/, '');
const ADMIN_CSRF_KEY = 'lmf.admin.csrf';
const BOOKING_CSRF_KEY = 'lmf.booking.csrf';

export function getApiUrl() {
  return API_URL;
}

export function getAdminCsrfToken() {
  return sessionStorage.getItem(ADMIN_CSRF_KEY) || readCookie('admin_csrf');
}

export function setAdminCsrfToken(token) {
  if (token) sessionStorage.setItem(ADMIN_CSRF_KEY, token);
  else sessionStorage.removeItem(ADMIN_CSRF_KEY);
}

export function getBookingCsrfToken() {
  return sessionStorage.getItem(BOOKING_CSRF_KEY) || readCookie('booking_csrf');
}

export function setBookingCsrfToken(token) {
  if (token) sessionStorage.setItem(BOOKING_CSRF_KEY, token);
  else sessionStorage.removeItem(BOOKING_CSRF_KEY);
}

function readCookie(name) {
  const prefix = `${name}=`;
  const match = document.cookie.split('; ').find((part) => part.startsWith(prefix));
  return match ? decodeURIComponent(match.slice(prefix.length)) : '';
}

export function adminRequest(path, options = {}) {
  const method = options.method || 'GET';
  return apiRequest(path, {
    ...options,
    csrfToken: method === 'GET' ? undefined : getAdminCsrfToken(),
  });
}

export async function apiRequest(path, { method = 'GET', body, csrfToken, headers: extraHeaders = {} } = {}) {
  const headers = { Accept: 'application/json', ...extraHeaders };
  if (body !== undefined) headers['Content-Type'] = 'application/json';
  if (csrfToken) headers['x-csrf-token'] = csrfToken;

  let response;
  try {
    response = await fetch(`${API_URL}${path}`, {
      method,
      headers,
      credentials: 'include',
      body: body === undefined ? undefined : JSON.stringify(body),
    });
  } catch {
    throw new ApiError('Cannot reach the scheduling API. Is the backend running?', 0, 'NETWORK_ERROR');
  }

  const text = await response.text();
  const data = text ? JSON.parse(text) : null;
  if (!response.ok) {
    throw new ApiError(data?.message || 'Request failed', response.status, data?.code);
  }
  return data;
}

export class ApiError extends Error {
  constructor(message, status, code) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
    this.code = code;
  }
}
