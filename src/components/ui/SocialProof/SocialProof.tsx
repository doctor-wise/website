'use client';

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { Heading } from '@/components/ui/Typography/Heading';
import { Text } from '@/components/ui/Typography/Text';
import {useTranslations} from 'next-intl';
import { PlayButton } from '@/components/ui/PlayButton/PlayButton';

// Local images from public/images
const imgAvatar = '/images/maurilo.png';
const imgAvatar1 = '/images/Raianne.webp';

// Video sources (S3)
const VIDEO_ISABELA = 'https://dw-media-files-5132.s3.sa-east-1.amazonaws.com/depoimentos-embaixadores/20.%20Isabela%20Polo.mp4';
const VIDEO_VITORIA = 'https://dw-media-files-5132.s3.sa-east-1.amazonaws.com/depoimentos-embaixadores/9.%20Vit%C3%B3ria%20Magro.mp4';
const VIDEO_AMANDA = 'https://dw-media-files-5132.s3.sa-east-1.amazonaws.com/depoimentos-embaixadores/15.%20Amanda%20Bochou.mp4';
const VIDEO_JULIO = 'https://dw-media-files-5132.s3.sa-east-1.amazonaws.com/depoimentos-embaixadores/depoimento-julio-abreu.mp4';
const THUMB_JULIO = '/images/Thumb-Dr Julio.png';
const VIDEO_JULIANA = 'https://dw-media-files-5132.s3.sa-east-1.amazonaws.com/depoimentos-embaixadores/2.%20Juliana%20Pan%C3%A3o.mp4';

function VideoTile({ src, poster }: { src: string; poster?: string }) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    v.play();
    v.controls = true;
    setIsPlaying(true);
  };

  const handleLoadedData = () => {
    const v = videoRef.current;
    if (!v) return;
    try {
      // Seek slightly forward to ensure a non-black first frame and pause to display it
      if (v.readyState >= 2 && !isPlaying && !poster) {
        v.currentTime = 0.1;
        v.pause();
      }
    } catch {
      // noop - some browsers may restrict programmatic seeks before metadata
    }
  };

  return (
    <div className="relative w-full h-full">
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        src={src}
        playsInline
        preload="metadata"
        poster={poster}
        onLoadedData={handleLoadedData}
        onEnded={() => setIsPlaying(false)}
      />
      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center">
          <PlayButton onClick={handlePlay} />
        </div>
      )}
    </div>
  );
}

export function SocialProof(): React.ReactElement {
  const t = useTranslations('SocialProof');
  return (
    <section id="social_proof_sections" className="w-full max-w-3xl mx-auto bg-bg-primary flex flex-col items-center p-spacing-md lg:px-spacing-xl lg:py-0">

      <div id="social_proof_box" className="w-full max-w-5xl rounded-5xl border border-border-secondary bg-bg-primary overflow-hidden pt-spacing-3xl px-spacing-md pb-spacing-md lg:p-spacing-6xl flex flex-col gap-spacing-3xl lg:gap-spacing-4xl">

        <div id="text_wrapper" className="w-full flex flex-col items-center">
          <Heading as="h3" size="display-xs" weight="semibold" align="center" color="secondary" className="block lg:hidden">
            {t.rich('heading', { br: () => <br />, highlight: (c) => (<span className="text-text-brand-tertiary-alt">{c}</span>) })}
          </Heading>
          <Heading as="h3" size="display-md" weight="semibold" align="center" color="secondary" className="hidden lg:block">
            {t.rich('heading', { br: () => <br />, highlight: (c) => (<span className="text-text-brand-tertiary-alt">{c}</span>) })}
          </Heading>
        </div>

        <div id="social_proof_grid" className="grid grid-cols-2 gap-spacing-xl lg:grid-cols-[repeat(4,_minmax(0,1fr))] lg:grid-rows-[repeat(3,_minmax(0,1fr))] lg:gap-spacing-xl lg:h-[1151px]">

          <div id="card_maurilo" className="order-1 col-span-2 lg:[grid-area:1_/_1_/_auto_/_span_2] bg-bg-primary border border-border-secondary rounded-5xl flex flex-col items-center gap-spacing-lg p-spacing-3xl lg:p-spacing-4xl">
            <div id="avatar_maurilo" className="size-12 lg:size-16 rounded-full border border-border-secondary overflow-hidden relative">
              <Image src={imgAvatar} alt={t('mauriloAlt')} fill className="object-cover" sizes="64px" />
            </div>
            <div id="name_title_maurilo" className="text-center">
              {/* Mobile */}
              <div className="block lg:hidden">
                <Text as="p" size="md" weight="semibold" align="center" className="text-text-brand-tertiary-alt">{t('mauriloName')}</Text>
                <Text as="p" size="xs" color="secondary" align="center">{t('mauriloTitle')}</Text>
              </div>
              {/* Desktop */}
              <div className="hidden lg:block">
                <Heading as="h4" size="display-xs" weight="semibold" align="center" color="brand">{t('mauriloName')}</Heading>
                <Text as="p" size="sm" color="secondary" align="center">{t('mauriloTitle')}</Text>
              </div>
            </div>
            <Text as="p" size="sm" color="tertiary" align="center">
              {`"${t('mauriloQuote')}"`}
            </Text>
          </div>

          <div id="video_large_right" className="order-5 col-span-2 aspect-[4/3] lg:aspect-auto lg:[grid-area:1_/_3_/_span_2_/_span_2] border border-border-secondary rounded-5xl relative overflow-hidden">
            <VideoTile src={VIDEO_JULIO} poster={THUMB_JULIO} />
          </div>

          <div id="video_left_middle" className="order-2 col-span-1 aspect-[2/3] lg:aspect-auto lg:[grid-area:2_/_1] border border-border-secondary rounded-5xl relative overflow-hidden">
            <VideoTile src={VIDEO_ISABELA} />
          </div>

          <div id="video_left_middle_2" className="order-3 col-span-1 aspect-[2/3] lg:aspect-auto lg:[grid-area:2_/_2] border border-border-secondary rounded-5xl relative overflow-hidden">
            <VideoTile src={VIDEO_AMANDA} />
          </div>

          <div id="video_bottom_left" className="order-6 col-span-1 aspect-[2/3] lg:aspect-auto lg:[grid-area:3_/_1] border border-border-secondary rounded-5xl relative overflow-hidden">
            <VideoTile src={VIDEO_VITORIA} />
          </div>

          <div id="card_raianne" className="order-4 col-span-2 lg:[grid-area:3_/_2_/_auto_/_span_2] bg-bg-primary border border-border-secondary rounded-5xl flex flex-col items-center gap-spacing-lg p-spacing-3xl lg:p-spacing-4xl">
            <div id="avatar_raianne" className="size-12 lg:size-16 rounded-full border border-border-secondary overflow-hidden relative">
              <Image src={imgAvatar1} alt={t('raianneAlt')} fill className="object-cover" sizes="64px" />
            </div>
            <div id="name_title_raianne" className="text-center">
              {/* Mobile */}
              <div className="block lg:hidden">
                <Text as="p" size="md" weight="semibold" align="center" className="text-text-brand-tertiary-alt">{t('raianneName')}</Text>
                <Text as="p" size="xs" color="secondary" align="center">{t('raianneTitle')}</Text>
              </div>
              {/* Desktop */}
              <div className="hidden lg:block">
                <Heading as="h4" size="display-xs" weight="semibold" align="center" color="brand">{t('raianneName')}</Heading>
                <Text as="p" size="sm" color="secondary" align="center">{t('raianneTitle')}</Text>
              </div>
            </div>
            <Text as="p" size="sm" color="tertiary" align="center">
              {`"${t('raianneQuote')}"`}
            </Text>
          </div>

          <div id="video_bottom_right" className="order-7 col-span-1 aspect-[2/3] lg:aspect-auto lg:[grid-area:3_/_4] border border-border-secondary rounded-5xl relative overflow-hidden">
            <VideoTile src={VIDEO_JULIANA} />
          </div>

        </div>
      </div>
    </section>
  );
}

export default SocialProof;


