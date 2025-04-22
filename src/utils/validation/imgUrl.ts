import { isImage } from '@utils/isImage';
import * as yup from 'yup';

export const imgUrlValidation = yup
  .string()
  .url('Must be a valid URL')
  .matches(/\.(jpe?g)$/i, 'Image must be a JPG or JPEG')
  .test('is-image', 'URL does not point to a valid image', async (value) => {
    if (!value) return false;
    const isValid = await isImage(value);

    return isValid;
  })
  .required('Image URL is required');
