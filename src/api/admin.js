import { adminRequest, apiRequest, getAdminCsrfToken, setAdminCsrfToken } from './client';

export async function loginAdmin(email, password) {
  const data = await apiRequest('/admin/login', {
    method: 'POST',
    body: { email, password },
  });
  setAdminCsrfToken(data.csrfToken);
  return data;
}

export function getAdminSession() {
  return apiRequest('/admin/session');
}

export async function logoutAdmin() {
  await apiRequest('/admin/logout', {
    method: 'POST',
    csrfToken: getAdminCsrfToken(),
  });
  setAdminCsrfToken('');
}

export function listAdminEvents() {
  return adminRequest('/admin/events');
}

export function createAdminEvent(input) {
  return adminRequest('/admin/events', { method: 'POST', body: input });
}

export function updateAdminEvent(id, input) {
  return adminRequest(`/admin/events/${id}`, { method: 'PATCH', body: input });
}

export function deleteAdminEvent(id) {
  return adminRequest(`/admin/events/${id}`, { method: 'DELETE' });
}
