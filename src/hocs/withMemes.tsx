import { getMemes } from '@graphql/meme';
import React from 'react';
import { Meme } from 'types';

type WithMemesProps = {
  memes: Meme[];
};

export const withMemes = <P extends object>(Component: React.ComponentType<P & WithMemesProps>) => {
  return async function WrappedComponent(props: P) {
    const memes = await getMemes();

    return (
      <Component
        {...props}
        memes={memes}
      />
    );
  };
};
