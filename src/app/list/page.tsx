// 'use client';

import { MemeList } from '@components/MemeList/MemeList';

// import dynamic from 'next/dynamic';

// const MemeList = dynamic(() => import('@components/MemeList/MemeList'), {
//   ssr: false,
// });

export const dynamic = 'force-dynamic';

export default function MemeListPage() {
  return <MemeList />;
}
