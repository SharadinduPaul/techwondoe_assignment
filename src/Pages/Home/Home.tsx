import React, { Suspense } from 'react';
import Fallback from '../../Components/Fallback/Fallback';
import './Home.css';

const Banner = React.lazy(() => import('./Components/Banner'));
const CanditatesEmployers = React.lazy(
  () => import('./Components/CanditatesEmployers')
);
const LatestNews = React.lazy(() => import('./Components/LatestNews'));
const OurTeam = React.lazy(() => import('./Components/OurTeam'));
const SpeakToExpert = React.lazy(() => import('./Components/SpeakToExpert'));
const Whychooseus = React.lazy(() => import('./Components/Whychooseus'));

export default function Home() {
  return (
    <div className='homeMain'>
      <Suspense fallback={<Fallback />}>
        <Banner />
      </Suspense>
      <Suspense fallback={<Fallback />}>
        <Whychooseus />
      </Suspense>
      <Suspense fallback={<Fallback />}>
        <OurTeam />
      </Suspense>
      <Suspense fallback={<Fallback />}>
        <LatestNews />
      </Suspense>
      <Suspense fallback={<Fallback />}>
        <CanditatesEmployers />
      </Suspense>
      <Suspense fallback={<Fallback />}>
        <SpeakToExpert />
      </Suspense>
    </div>
  );
}
