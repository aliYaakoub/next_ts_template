import * as yup from 'yup';

export const userSchema = yup.object().shape({
  firstName: yup.string().min(1).max(50).required(),
  lastName: yup.string().min(1).max(50).required(),
  age: yup.number().min(10).max(100).required(),
  email: yup.string().email().required(),
});
