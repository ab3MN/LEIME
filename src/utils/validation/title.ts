import * as yup from 'yup';

const MIN_LENGTH = 3;
const MAX_LENGTH = 100;

export const titleValidation = yup
  .string()
  .trim()
  .required('Title is required')
  .min(MIN_LENGTH, `Should contain at least ${MIN_LENGTH} symbols`)
  .min(MIN_LENGTH, `Max contain ${MAX_LENGTH} symbols`);
