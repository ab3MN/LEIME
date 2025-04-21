'use client';

import { FC, useEffect } from 'react';
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';
import { Button } from '@heroui/react';
import { PATH } from '@constants/path';
import { baseLink } from 'styles';
import Link from 'next/link';

interface Props {
  error: Error;
  reset: () => void;
}

const Error: FC<Props> = ({ error, reset }) => {
  useEffect(() => {
    console.error(error.message);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full text-center">
        <div className="flex justify-center mb-4">
          <ExclamationTriangleIcon className="h-12 w-12 text-red-500" />
        </div>
        <h1 className="text-3xl font-semibold text-gray-900 mb-2">Something went wrong</h1>
        <p className="text-gray-600 mb-4">An unexpected error occurred. Please try again or go back to the homepage.</p>
        <p className="text-sm text-gray-500 mb-6 italic">
          <strong>Error:</strong> {error.message}
        </p>
        <div className="flex justify-center gap-3  items-center">
          <Button onPress={reset}>Try again</Button>

          <Link
            className={baseLink}
            href={PATH.HOME}
          >
            Go to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;
