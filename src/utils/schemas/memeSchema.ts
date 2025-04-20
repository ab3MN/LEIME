import { imgUrlValidation, likesValidation, titleValidation } from '@utils/validation';
import * as yup from 'yup';

export const memeSchema = yup.object().shape({
  title: titleValidation,
  imgUrl: imgUrlValidation,
  likes: likesValidation,
});
