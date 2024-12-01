import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-2">
      <div className="flex-1 max-w-full box-border sm:flex-1 sm:max-w-[calc(50%-20px)] md:flex-1 md:max-w-[calc(33.33%-20px)]">
        <Image src="/images/Hero.svg" alt="Hero" width={1280} height={800} />
      </div>
      <div className="flex-1 max-w-full box-border sm:flex-1 sm:max-w-[calc(50%-20px)] md:flex-1 md:max-w-[calc(33.33%-20px)]">
        <Image src="/images/explore.svg" alt="explore" width={1280} height={1049} />
      </div>
      <div className="flex-1 max-w-full box-border sm:flex-1 sm:max-w-[calc(50%-20px)] md:flex-1 md:max-w-[calc(33.33%-20px)]">
        <Image src="/images/ourachivmnts.svg" alt="achievements" width={1280} height={1049} />
      </div>
      <div className="flex-1 max-w-full box-border sm:flex-1 sm:max-w-[calc(50%-20px)] md:flex-1 md:max-w-[calc(33.33%-20px)]">
        <Image src="/images/courses.svg" alt="courses" width={1280} height={1049} />
      </div>
      <div className="flex-1 max-w-full box-border sm:flex-1 sm:max-w-[calc(50%-20px)] md:flex-1 md:max-w-[calc(33.33%-20px)]">
        <Image src="/images/team.svg" alt="team" width={1280} height={1049} />
      </div>
      <div className="flex-1 max-w-full box-border sm:flex-1 sm:max-w-[calc(50%-20px)] md:flex-1 md:max-w-[calc(33.33%-20px)]">
        <Image src="/images/testimonials.svg" alt="testimonials" width={1280} height={1049} />
      </div>
      <div className="flex-1 max-w-full box-border sm:flex-1 sm:max-w-[calc(50%-20px)] md:flex-1 md:max-w-[calc(33.33%-20px)]">
        <Image src="/images/newsletter.svg" alt="newsletter" width={1280} height={1049} />
      </div>
    </div>
  );
}

export default Hero;
