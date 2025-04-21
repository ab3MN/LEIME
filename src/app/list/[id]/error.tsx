'use client';

import { FC } from 'react';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';
import { CustomLink } from '@ui/Link/Link';
import { PATH } from '@constants/path';

interface Props {
  error: Error;
}

const Error: FC<Props> = ({ error }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full text-center">
        <div className="flex justify-center mb-4">
          <ExclamationTriangleIcon className="h-12 w-12 text-red-500" />
        </div>

        <p className="text-sm text-gray-500 mb-6 italic">
          <strong>Error:</strong> {error.message}
        </p>
        <div className="flex justify-center gap-3  items-center">
          <CustomLink
            href={PATH.HOME}
            label="Go to Meme List"
          />
        </div>
      </div>
    </div>
  );
};

export default Error;
