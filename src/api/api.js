import axios from "axios";

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true
});

export const getUsers = (currentPage, pageSize = 5) => {
  return (instance.get(`users?page=${currentPage}&count=${pageSize}`))
    .then((response) => {
      return response.data
    });

};

export const getPages = (pageNumber = 1, pageSize = 5) => {
  return (instance.get(`users?page=${pageNumber}&count=${pageSize}`))
    .then((response) => {
      return response.data
    });
};

export const getProfile = (userId) => {
  return (instance.get(`profile/` + userId))
    .then((response) => {
      return response.data
    });
};

export const getAuthData = () => {
  return (instance.get(`auth/me`))
};

export const unfollowFriend = (id) => {
  return (instance.delete(`follow/${id}`
  )).then((response) => { return response.data })
}

export const followFriend = (id) => {
  return (instance.post(`follow/${id}`
  )).then((response) => { return response.data })
}

