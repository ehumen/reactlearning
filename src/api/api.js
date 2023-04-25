import axios from "axios";

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true
});

export const usersAPI = {
  async getUsers(page = 1, pageSize = 5) {
    return (instance.get(`users?page=${page}&count=${pageSize}`))
      .then((response) => { return response.data });
  },
  async unfollowFriend(userId) {
    return (instance.delete(`follow/${userId}`))
      .then((response) => { return response.data })
  },
  async followFriend(userId) {
    return (instance.post(`follow/${userId}`))
      .then((response) => { return response.data })
  },
  async getProfile(userId) {
    return (instance.get(`profile/` + userId))
      .then((response) => {
        return response.data
      });
  },
}


export const getAuthData = () => {
  return (instance.get(`auth/me`))
};
