import axios from "axios";

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true
});

export const getUsers = (currentPage, pageSize = 5) => {
   return( instance.get(`users?page=${currentPage}&count=${pageSize}`))
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



// const fibonacciArray = (N) => {
//   let arr = [];
//   if (N===0){
//     return arr;
//   }
//   for (let i = 0; i < N; i++) {
  
//     let number = (i > 1 ? arr[i-1] + arr[i - 2] : 1)
//     arr.push(number);
//   }
//   return arr;
// }

// console.log(fibonacciArray(0))

// const func = (number) => {
//   return (
//     new Array(number)
//       .fill(0)
//       .map((_, idx, self) => (
//         self[idx] = idx > 1 ? self[idx-1] + self[idx-2] : 1
//       ))
//   )
// }

// for (let i = 0; i < 10; i++) {
//   console.log(func(i))
// }