import { apiRequest } from './client';

export function listPublicEvents() {
  return apiRequest('/events');
}

export function getPublicEvent(id) {
  return apiRequest(`/events/${id}`);
}
