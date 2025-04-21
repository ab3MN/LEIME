// const Home = dynamic(() => import('@components/Home/Home'), {
//   ssr: false,
// });

import { Home } from '@components/Home/Home';

export const dynamic = 'force-dynamic';

export default function HomePage() {
  return <Home />;
}
