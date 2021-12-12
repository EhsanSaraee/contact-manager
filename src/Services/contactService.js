import http from './httpService';

export const getContacts = () => http.get('/contacts');

export const getSingleContact = (id) => http.get(`/contacts/${id}`);

export const deleteContact = (id) => http.delete(`/contacts/${id}`);

export const addContact = (contact) => http.post('/contacts', contact);

export const updateContact = (id, contact) =>
   http.put(`/contacts/${id}`, contact);
