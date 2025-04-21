import { ExclamationCircleIcon } from '@heroicons/react/24/outline';
import { PATH } from '@constants/path';
import clsx from 'clsx';
import { baseLink } from 'styles';
import Link from 'next/link';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full text-center">
        <div className="flex justify-center mb-4">
          <ExclamationCircleIcon className="h-12 w-12 text-gray-500" />
        </div>
        <h1 className="text-3xl font-semibold text-gray-900 mb-2">Page not found</h1>
        <p className="text-gray-600 mb-4">{`The page you're looking for doesn't exist or has been moved.`}</p>
        <p className="text-sm text-gray-500 mb-6 italic">
          Error code: <strong>404</strong>
        </p>
        <Link
          className={clsx(baseLink, 'text-center')}
          href={PATH.HOME}
        >
          Go to Homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
