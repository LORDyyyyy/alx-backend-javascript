import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((data) => {
      const result = [];
      data.forEach((value) => {
        result.push({ status: value.status, value });
      });
      console.log(result)
      return result;
    });
}
