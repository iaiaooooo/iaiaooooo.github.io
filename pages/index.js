import { useRef, useEffect, useState } from 'react';
import Header from '../components/Header';
import { useRouter } from 'next/router';
import IconShape from '../components/IconShape';
import WorkCard from '../components/WorkCard';
import Footer from '../components/Footer';
import Head from 'next/head';
import Button from '../components/Button';
import Link from 'next/link';

// Local Data
import data from '../data/portfolio.json';

export default function Home() {
  // Ref
  const workRef = useRef();
  const workTitle = useRef();

  const router = useRouter();
  const [scroll, setScroll] = useState(0);

  // Handling Scroll
  const handleWorkScroll = () => {
    window.scrollTo({
      top: workRef.current.offsetTop - 120,
      left: 0,
      behavior: 'smooth',
    });
  };

  const handleScroll = () => {
    if (window.scrollY > 100) {
      workTitle.current.style.opacity = 1;
    } else {
      workTitle.current.style.opacity = 0;
    }

    if (window.scrollY > scroll + 250 || window.scrollY < scroll - 250) {
      window.removeEventListener('scroll', handleScroll);
      setScroll(window.scrollY);
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
    if (anchor == 'work') {
      setTimeout(handleWorkScroll, 0);
    }
  }, [router.asPath]);

  return (
    <div className="global-background">
      <Head>
        <title>{data.name}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Header handleWorkScroll={handleWorkScroll} />
      <div className="h-svh flex flex-col justify-center justify-items-center -mt-20 pt-20 text-colored bg-accent dark:bg-accent-dark">
        <div className="font-grotezk text-8xl md:text-[15rem] leading-none h-auto text-center">Hello!</div>
        <div className="text-[3rem] text-center">{data.headerTaglineOne}</div>
        <div className="text-2xl md:text-[3rem] font-grotezk-brukt text-center">{data.headerTaglineTwo}</div>
        <div className="mt-40 md:mt-20 flex flex-row mx-auto justify-center">
          <IconShape
            className="h-20 w-20 md:h-30 md:w-30  fill-accent-dark dark:fill-accent motion-safe:animate-bounce"
            onClick={() => handleWorkScroll()}
          />
        </div>
      </div>
      <div className="section-with-title" ref={workRef} id="work">
        <div ref={workTitle} className="section-title text-colored  transition-all ease-in-out duration-300 opacity-0">
          Work
        </div>

        <div className="content-container grid grid-cols-1 md:grid-cols-2 gap-8">
          {data.projects.map((project) => (
            <WorkCard
              key={project.id}
              img={project.imageSrc}
              name={project.title}
              description={project.description}
              onClick={() => (project.url.indexOf('http') == 0 ? window.open(project.url) : router.push(project.url))}
            />
          ))}
        </div>
      </div>

      {/* This button should not go into production */}
      {process.env.NODE_ENV === 'development' && (
        <div className="fixed bottom-5 right-5">
          <Link href="/edit">
            <Button type="primary">Edit Data</Button>
          </Link>
        </div>
      )}

      <Footer />
    </div>
  );
}
