import data from '../data/portfolio.json';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useRef, useEffect } from 'react';
import { useRouter } from 'next/router';
import { generateRandomRadius } from '../components/WorkCard';
import Head from 'next/head';
import Socials from '../components/SocialsShapes';

export default function About() {
  const router = useRouter();
  const contactRef = useRef();
  const contactTitleRef = useRef();

  // Handling Scroll
  const handleContactScroll = () => {
    window.scrollTo({
      top: contactRef.current.offsetTop - 120,
      left: 0,
      behavior: 'smooth',
    });
  };

  const handleScroll = () => {
    if (window.scrollY > 100) {
      contactTitleRef.current.style.opacity = 1;
    } else {
      contactTitleRef.current.style.opacity = 0;
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  useEffect(() => {
    const anchor = router.asPath.split('#')[1];
    if (anchor == 'contacts') {
      setTimeout(handleContactScroll, 0);
    }
  });

  return (
    <div className="global-background">
      <Head>
        <title>{data.name}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Header handleContactScroll={handleContactScroll} />

      <div className="h-fit md:h-svh flex flex-col-reverse justify-center justify-items-center lg:flex-row lg:justify-around -mt-20 py-20 px-10 lg:pt-40 pb-20 bg-accent  dark:bg-accent-dark">
        <div className="lg:max-w-1/2 flex flex-col justify-center justify-items-center">
          <div className="font-grotezk p-2 text-5xl lg:text-[10rem] 2xl:text-[12rem] leading-none h-auto text-left text-accent-dark dark:text-accent">
            It&apos;s Me
          </div>
          <div className="font-medium text-2xl 2xl:text-4xl p-2">{data.aboutpara}</div>
        </div>

        <div
          className="lg:my-auto relative overflow-hidden transition-all ease-out duration-300 h-[300px] md:h-[500px] lg:h-full lg:max-h-[750px]"
          style={{ borderRadius: generateRandomRadius() }}
        >
          <img
            alt={data.name}
            className="h-full w-full object-cover hover:scale-110 transition-all ease-out duration-300"
            src="/images/profile/profile.jpeg"
          ></img>
        </div>
      </div>

      <div className="section-with-title" ref={contactRef} id="contacts">
        <div
          ref={contactTitleRef}
          className="section-title text-colored  transition-all ease-in-out duration-300 opacity-0"
        >
          Contacts
        </div>

        <div className="px-10 md:py-20">
          <Socials />
        </div>
      </div>

      <Footer />
    </div>
  );
}
