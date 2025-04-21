'use client';

import { Button, Image } from '@heroui/react';
import { ArrowRightIcon, ChevronDoubleRightIcon, ChevronDoubleLeftIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { buttonStyles, sliderButtonStyles } from 'styles';
import { PATH } from '@constants/path';
import Link from 'next/link';
import { SectionContainer } from '@ui/Containers/SectionContainer';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation } from 'swiper/modules';
import { useAppSelector } from '@redux/hooks';
import { memesSelector } from '@redux/selectors/meme.selector';
import { useEffect, useState } from 'react';

export const Home = () => {
  const memes = useAppSelector(memesSelector);

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="bg-gray-100 pb-10">
      <SectionContainer className="bg-blue-800 text-white py-16 text-center">
        <>
          <h2 className="text-4xl font-extrabold mb-4">Welcome to the Meme Website!</h2>
          <p className="mb-6 text-lg">Check out the funniest memes and share them with your friends!</p>

          <Link
            className={clsx(buttonStyles, 'px-8 py-2')}
            href={PATH.LIST}
          >
            Explore
          </Link>
        </>
      </SectionContainer>

      <SectionContainer className="mb-12">
        <h2 className="text-3xl font-bold text-gray-800 text-center">Popular Memes</h2>

        <div className="relative">
          <Swiper
            modules={[Navigation]}
            slidesPerGroup={1}
            spaceBetween={24}
            loop={true}
            navigation={{
              nextEl: '.next__button',
              prevEl: '.prev__button',
            }}
            breakpoints={{
              640: { slidesPerView: 1 },
              800: { slidesPerView: 2 },
              1200: { slidesPerView: 3 },
            }}
            className="mt-8"
          >
            {memes.map((meme) => (
              <SwiperSlide key={meme.id}>
                <li className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full">
                  <div className="aspect-w-1 aspect-h-1 w-full flex justify-center ">
                    <Image
                      src={meme.imgUrl}
                      alt={meme.title}
                      className="object-cover w-full h-full"
                      width={500}
                      height={500}
                    />
                  </div>

                  <div className="flex flex-col p-4 h-full flex-1">
                    <h3 className="text-xl font-semibold text-gray-700 mb-4">{meme.title}</h3>

                    <div className="mt-auto">
                      <Link
                        className={clsx(buttonStyles, 'inline-flex items-center py-2 px-5')}
                        href={`${PATH.LIST}/${meme.id}`}
                      >
                        View Meme
                        <ArrowRightIcon className="h-5 w-5 ml-2" />
                      </Link>
                    </div>
                  </div>
                </li>
              </SwiperSlide>
            ))}
          </Swiper>

          <Button className={clsx(sliderButtonStyles, 'left-0 prev__button')}>
            <ChevronDoubleLeftIcon
              width={24}
              height={24}
            />
          </Button>
          <Button className={clsx(sliderButtonStyles, 'right-0 next__button')}>
            <ChevronDoubleRightIcon
              width={24}
              height={24}
            />
          </Button>
        </div>
      </SectionContainer>
    </div>
  );
};
