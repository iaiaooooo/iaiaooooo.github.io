import { Popover } from '@headlessui/react';
import { useRouter } from 'next/router';
import React from 'react';
import IconShape from '../IconShape';
import Button from '../Button';
import Menu from '../../public/images/menu.svg';
import MenuClose from '../../public/images/cancel.svg';
// Local Data
import data from '../../data/portfolio.json';

const Header = ({ handleWorkScroll, handleAboutScroll, handleContactScroll }) => {
  const router = useRouter();
  const { name, showResume } = data;

  return (
    <>
      <Popover className="top-0 z-10 px-5 sticky h-20 md:hidden bg-colored">
        {({ open }) => (
          <>
            <div className="h-full flex items-center justify-between p-2">
              <div className="w-fit flex flex-row" onClick={() => router.push('/')}>
                <IconShape fixed className="h-8 w-8 my-auto mr-2 text-colored" />
                <h1 onClick={() => router.push('/')} className="h-10 leading-10 font-grotezk text-colored text-2xl ">
                  {name}
                </h1>
              </div>

              <div className="flex items-center">
                <Popover.Button>
                  {open ? <MenuClose className="w-8 h-8 text-colored" /> : <Menu className="w-8 h-8 text-colored" />}
                </Popover.Button>
              </div>
            </div>
            <Popover.Panel className="bg-white dark:bg-accent-bg-dark shadow-md rounded-md">
              <div className="grid grid-cols-1">
                <Button
                  onClick={
                    handleWorkScroll
                      ? handleWorkScroll
                      : () => {
                          router.push('/#work');
                        }
                  }
                >
                  Work
                </Button>
                <Button
                  onClick={
                    handleAboutScroll
                      ? handleAboutScroll
                      : () => {
                          router.push('/about');
                        }
                  }
                >
                  About
                </Button>

                {showResume && (
                  <Button onClick={() => router.push('/resume')} classes="first:ml-1">
                    Resume
                  </Button>
                )}

                <Button
                  onClick={
                    handleContactScroll
                      ? handleContactScroll
                      : () => {
                          router.push('/about#contacts');
                        }
                  }
                >
                  Contact
                </Button>
              </div>
            </Popover.Panel>
          </>
        )}
      </Popover>
      <div className="font-grotezk-mittel h-20 p-10 hidden flex-row items-center justify-between sticky bg-accent  text-accent-dark dark:text-accent dark:bg-accent-dark top-0 z-10 md:flex">
        <div className="w-fit flex flex-row" onClick={() => router.push('/')}>
          <IconShape fixed className="h-10 w-10 mr-2 fill-accent-dark dark:fill-accent" />
          <h1 className="h-10 leading-10 font-grotezk text-colored text-xl cursor-pointer ">{name}</h1>
        </div>

        <div className="flex">
          <Button
            onClick={
              handleWorkScroll
                ? handleWorkScroll
                : () => {
                    router.push('/#work');
                  }
            }
          >
            Work
          </Button>
          <Button
            onClick={
              handleAboutScroll
                ? handleAboutScroll
                : () => {
                    router.push('/about');
                  }
            }
          >
            About
          </Button>

          {showResume && (
            <Button onClick={() => router.push('/resume')} classes="first:ml-1">
              Resume
            </Button>
          )}

          <Button
            onClick={
              handleContactScroll
                ? handleContactScroll
                : () => {
                    router.push('/about#contacts');
                  }
            }
          >
            Contact
          </Button>
        </div>
      </div>
    </>
  );
};

export default Header;
