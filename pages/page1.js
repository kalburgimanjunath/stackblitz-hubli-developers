import Link from 'next/link';
import { useState } from 'react';
const Section1 = ({ blubs }) => {
  return (
    <div className="bg-orange-200 p-5 min-h-full">
      <div className="flex h-50 grid grid-cols-3 justify-around w-full mt-5">
        {blubs &&
          blubs.map((item) => {
            return (
              <div className="grid-cols-1 text-center">
                <div className="justify-center h-20 w-full flex">
                  <span>{item.icon}</span>
                </div>
                <div className="text-2xl font-bold">{item.title}</div>
                <div>{item.subtitle}</div>
              </div>
            );
          })}
      </div>
    </div>
  );
};
const Header = () => {
  return (
    <div className="flex sticky top-0 brand1 shadow-md">
      <div className="p-2 m-1 hover:text-pink-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
          />
        </svg>
      </div>
      <div className="flex justify-end w-full text-green-800 font-bold">
        <div className="p-2 m-1 hover:bg-gray-300 cursor-pointer rounded-md">
          <Link scroll={false} href="#">
            Home
          </Link>
        </div>
        <div className="p-2 m-1 hover:bg-gray-300 cursor-pointer rounded-md">
          <Link scroll={false} href="#section4">
            {' '}
            Project
          </Link>
        </div>
        <div className="p-2 m-1 hover:bg-gray-300 cursor-pointer rounded-md">
          <Link scroll={false} href="#section6">
            Contact us
          </Link>
        </div>
      </div>
    </div>
  );
};
const Section2 = ({ blubs }) => {
  return (
    <div className="p-5 m-5">
      <div className="flex grid grid-cols-3 justify-around w-full text-center">
        {blubs &&
          blubs.map((item) => {
            return (
              <div>
                <div className="flex justify-center">
                  <img
                    src={item.image}
                    width="50"
                    height="50"
                    className="rounded-full"
                  />
                </div>
                <div className="text-2xl font-bold">{item.title}</div>
                <div>{item.subtitle}</div>
              </div>
            );
          })}
      </div>
    </div>
  );
};
const Section3 = ({ blubs }) => {
  return (
    <div className="p-5 m-5">
      <div className="flex grid grid-cols-2 w-full justify-around ">
        {blubs &&
          blubs.map((item) => {
            return (
              <div className="rounded border-2 border-black p-3 m-2 bg-orange-300">
                <div className="text-md font-bold">{item.title}</div>
                <div className="text-md italic">{item.author}</div>
              </div>
            );
          })}
      </div>
    </div>
  );
};
const Footer = () => {
  const links = [
    'Courses',
    'Business',
    'Technology',
    'Arts',
    'Community',
    'Forums',
    'Events',
    'Collaborations',
    'Support',
    'FAQ',
    'Contact',
    'Resources',
  ];
  return (
    <div className="bg-black text-white p-5">
      <div className="flex grid grid-cols-3 justify-between">
        {links &&
          links.map((item) => {
            return <div>{item}</div>;
          })}
      </div>
      <div className="flex justify-center text-center m-2">
        <span className="p-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
          </svg>
        </span>
        <span className="p-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
        </span>
        <span className="p-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
          </svg>
        </span>
        <span className="p-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
          </svg>
        </span>
      </div>
      <div className="text-center m-5">
        <div>2023 EduHub,All rights reserved</div>
      </div>
    </div>
  );
};
export default function Page1() {
  const blubs = [
    {
      title: 'Lavish Living Spaces',
      subtitle: '200+ Happy Families',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-20 h-20"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819"
          />
        </svg>
      ),
    },
    {
      title: 'State-of-the-Art Offices',
      subtitle: '50+ Thriving Businesses',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-20 h-20"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
          />
        </svg>
      ),
    },
    {
      title: 'Eco-Friendly Designs',
      subtitle: '30+ Green Spaces',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-20 h-20"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75"
          />
        </svg>
      ),
    },
  ];
  const blubs1 = [
    {
      title: 'Ramesh',
      subtitle: 'CEO',
      image: 'https://i.pravatar.cc/300',
    },
    {
      title: 'Geeta',
      subtitle: 'Architect',
      image: 'https://i.pravatar.cc/300',
    },
    {
      title: 'Prakash',
      subtitle: 'Project Manager',
      image: 'https://i.pravatar.cc/300',
    },
  ];
  const blubs2 = [
    {
      title:
        'Hubli Land Developers transformed our cramped office into a spacious, modern workspace that sparks creativity.',
      author: 'TechMars',
      image: '',
    },
    {
      title:
        'Their residential project, Tranquil Living, gave our family the perfect combination of comfort, luxury, and nature.',
      author: 'DreamHome',
      image: '',
    },
  ];
  const RecentProjects = ({ items }) => {
    return (
      <div className="recent-projects flex grid grid-cols-3 p-3">
        {items &&
          items.map((item) => {
            return (
              <div className="p-2 w-full hover:scale-125 transition duration-500 cursor-pointer">
                <img src={item.image} className="rounded-md w-full h-48 " />
              </div>
            );
          })}
      </div>
    );
  };
  const projects = [
    { image: 'https://picsum.photos/seed/picsum/200/300' },
    { image: 'https://picsum.photos/seed/picsum/200/300' },
    { image: 'https://picsum.photos/seed/picsum/200/300' },
    { image: 'https://picsum.photos/seed/picsum/200/300' },
    { image: 'https://picsum.photos/seed/picsum/200/300' },
  ];
  const [showscrollToTop, setShowScroll] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    setShowScroll(!showscrollToTop);
  };

  return (
    <div className="brand1 container h-50 bg-fixed scroll-smooth">
      <Header />
      <div className="p-5 h-50 max-h-full m-5" id="section0">
        <h1 className="text-8xl font-bold mt-3 mb-3 text-green-800">
          Revolutionizing Hubli Landscapes. Discover Dream Properties.
        </h1>

        <button className="primary">Start Exploring</button>
      </div>
      <Section1 blubs={blubs} id="section1" />
      <Section2 blubs={blubs1} id="section2" />
      <Section3 blubs={blubs2} id="section3" />
      <div className="p-5 text-center" id="section4">
        <h1 className="m-2 text-3xl">Let’s create visionary spaces.</h1>
        <div>
          <button className="secondary">Get Started</button>
        </div>
      </div>
      <RecentProjects items={projects} id="section5" />
      <div className="p-5 text-center" id="section6">
        <h1 className="m-2 text-3xl">Get Started</h1>
        <div className="m-2">
          Ready to embark on a land development journey with the best of Hubli?
          Reach out to our team for more information, or visit our projects
          today.
        </div>
        <div>
          <button className="secondary">Contact Us</button>
        </div>
      </div>

      <button
        onClick={() => scrollToTop()}
        type="button"
        data-te-ripple-init
        data-te-ripple-color="light"
        class={
          showscrollToTop
            ? '!fixed bottom-5 right-5 rounded-full bg-red-600 p-3 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg'
            : 'hidden'
        }
        id="btn-back-to-top"
      >
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          class="h-4 w-4"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path
            fill="currentColor"
            d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"
          ></path>
        </svg>
      </button>
      <Footer />
    </div>
  );
}
