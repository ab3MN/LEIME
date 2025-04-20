import * as yup from 'yup';

const MIN_LENGTH = 0;
const MAX_LENGTH = 99;

export const likesValidation = yup
  .number()
  .typeError('Must be a number')
  .required('Likes are required')
  .min(MIN_LENGTH, `Should contain at least ${MIN_LENGTH} likes`)
  .max(MAX_LENGTH, `Max contain ${MAX_LENGTH} likes`);
