import { request } from '@@/plugin-request';

const RoomBaseUrl = '/api/room';
export const getRoomList = () => {
  return request(RoomBaseUrl);
};

export const createRoom = (data: API.RoomInfoVO) => {
  return request(RoomBaseUrl, { method: 'post', data });
};

export const patchRoom = (id: number, data: API.RoomInfoVO) => {
  return request(`${RoomBaseUrl}/${id}`, { method: 'patch', data });
};
export const getRoomInfo = (id: number) => {
  return request(`${RoomBaseUrl}/${id}`);
};
