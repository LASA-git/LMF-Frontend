import { apiRequest, getBookingCsrfToken, setBookingCsrfToken } from './client';

function idempotencyStorageKey(eventId, email) {
  return `lmf.idem.${eventId}.${email.trim().toLowerCase()}`;
}

function getOrCreateIdempotencyKey(eventId, email) {
  const storageKey = idempotencyStorageKey(eventId, email);
  const existing = sessionStorage.getItem(storageKey);
  if (existing) return existing;
  const next = crypto.randomUUID();
  sessionStorage.setItem(storageKey, next);
  return next;
}

export async function startBooking(eventId, email) {
  const attempt = async (resetKey) => {
    if (resetKey) sessionStorage.removeItem(idempotencyStorageKey(eventId, email));
    const idempotencyKey = getOrCreateIdempotencyKey(eventId, email);
    return apiRequest('/bookings/start', {
      method: 'POST',
      body: { eventId, email },
      headers: { 'Idempotency-Key': idempotencyKey },
    });
  };

  try {
    return await attempt(false);
  } catch (error) {
    if (error.status === 409 && /idempotency/i.test(error.message || '')) {
      return attempt(true);
    }
    throw error;
  }
}

export function resendOtp(bookingId, email) {
  return apiRequest(`/bookings/${bookingId}/resend-otp`, {
    method: 'POST',
    body: { email },
  });
}

export async function verifyOtp(bookingId, code) {
  const data = await apiRequest('/bookings/verify-otp', {
    method: 'POST',
    body: { bookingId, code },
  });
  setBookingCsrfToken(data.csrfToken);
  return data;
}

export async function submitIntake(bookingId, input) {
  const data = await apiRequest(`/bookings/${bookingId}/intake`, {
    method: 'POST',
    body: input,
    csrfToken: getBookingCsrfToken(),
  });
  setBookingCsrfToken('');
  return data;
}

export function lookupBooking(confirmationCode, email) {
  return apiRequest('/bookings/lookup', {
    method: 'POST',
    body: { confirmationCode, email },
  });
}
