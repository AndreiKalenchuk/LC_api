import axios from "axios";
const host = "https://server-stage.pasv.us";

export async function apiUserRegister(user) {
  return axios
    .post(`${host}/user`, {
      email: user.email,
      password: user.password,
      firstName: user.firstName,
      lastName: user.lastName,
      phone: user.phone,
      about: user.about,
      goals: user.goals,
      englishLevel: user.englishLevel,
      countryName: user.countryName,
    })
    .then((res) => res)
    .catch((error) => error);
}

export function apiUserLogin(userRole) {
  return axios
    .post(`${host}/user/login`, {
      email: userRole.email,
      password: userRole.password,
    })
    .then((res) => res)
    .catch((error) => error);
}











