// 'use client';

import MemeTable from '@components/MemeTable/MemeTable';

// import dynamic from 'next/dynamic';

// const MemeTable = dynamic(() => import('@components/MemeTable/MemeTable'), {
//   ssr: false,
// });

export const dynamic = 'force-dynamic';

export default function MemeTablePage() {
  return <MemeTable />;
}
