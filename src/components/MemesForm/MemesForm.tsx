import { Button, Form } from '@heroui/react';
import { LabeledInput } from '@ui/Inputs/LabeledInput';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Meme } from 'types';
import { updateMeme } from '@graphql/meme';
import { FC } from 'react';
import { memeSchema } from '@utils/schemas';
import clsx from 'clsx';
import { buttonStyles } from 'styles';

interface Props {
  meme: Meme;
}

export const MemesForm: FC<Props> = ({ meme }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Pick<Meme, 'title' | 'imgUrl' | 'likes'>>({
    resolver: yupResolver(memeSchema),
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<Pick<Meme, 'title' | 'imgUrl' | 'likes'>> = async ({ title, imgUrl, likes }) => {
    const updatedMeme = await updateMeme(meme.id, { title, imgUrl, likes });

    if (updatedMeme) {
      reset();
    }
  };

  return (
    <Form
      className="w-full max-w-md space-y-4 p-4 bg-white dark:bg-gray-900 rounded-xl shadow-lg mb-5"
      onSubmit={handleSubmit(onSubmit)}
    >
      <LabeledInput
        name="title"
        label="Meme Title"
        placeholder="Enter title"
        register={register}
        err={errors.title?.message || ''}
        defaultValue={meme.title}
      />
      <LabeledInput
        name="imgUrl"
        label="Meme Image"
        placeholder="Enter image URL"
        register={register}
        defaultValue={meme.imgUrl}
        err={errors.imgUrl?.message || ''}
      />
      <LabeledInput
        name="likes"
        label="Likes"
        placeholder="Enter number of likes"
        register={register}
        type="number"
        defaultValue={String(meme.likes)}
        err={errors.likes?.message || ''}
      />

      <Button
        type="submit"
        className={clsx(buttonStyles, 'px-[50px] py-[10px] mx-auto block')}
      >
        Submit
      </Button>
    </Form>
  );
};
