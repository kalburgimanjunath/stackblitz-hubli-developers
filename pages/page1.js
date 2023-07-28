const Section1 = ({ blubs }) => {
  return (
    <div className="brand2 p-5 m-5">
      <div className="flex grid grid-cols-3 justify-around w-full mt-5">
        {blubs &&
          blubs.map((item) => {
            return (
              <div className="grid-cols-1">
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
    <div className="flex">
      <div>Logo</div>
      <div className="flex justify-end w-full text-green-800 font-bold">
        <div className="p-2 m-1 hover:bg-gray-300 cursor-pointer rounded-md">
          Home
        </div>
        <div className="p-2 m-1 hover:bg-gray-300 cursor-pointer rounded-md">
          Project
        </div>
        <div className="p-2 m-1 hover:bg-gray-300 cursor-pointer rounded-md">
          Contact us
        </div>
      </div>
    </div>
  );
};
const Section2 = ({ blubs }) => {
  return (
    <div className="p-5 m-5">
      <div className="flex grid grid-cols-3 justify-around w-full">
        {blubs &&
          blubs.map((item) => {
            return (
              <div>
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
              <div className="rounded border-2 border-black p-3 m-2 brand2">
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
      <div className="flex justify-between align-center text-center m-2">
        <span>Twitter</span>
        <span>Instagram</span>
        <span>Facebook</span>
        <span>Youtube</span>
      </div>
      <div className="text-center m-5">
        <div>2023 EduHub,All rights reserved</div>
      </div>
    </div>
  );
};
export default function Page1() {
  const blubs = [
    { title: 'Lavish Living Spaces', subtitle: '200+ Happy Families' },
    { title: 'State-of-the-Art Offices', subtitle: '50+ Thriving Businesses' },
    { title: 'Eco-Friendly Designs', subtitle: '30+ Green Spaces' },
  ];
  const blubs1 = [
    {
      title: 'Ramesh',
      subtitle: 'CEO',
      image: '',
    },
    {
      title: 'Geeta',
      subtitle:
        'EduHub boasts a lineup of skilled instructors from top institutions around the globe. Experience captivating lectures that delve deep into subjects, inspiring you to think creatively and experientially.',
      image: 'Architect',
    },
    {
      title: 'Prakash',
      subtitle: 'Project Manager',
      image: '',
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

  return (
    <div className="brand1 container h-50">
      <Header />
      <div className="p-5 h-50 min-h-full m-5">
        <h1 className="text-8xl font-bold mt-3 mb-3 text-green-800">
          Revolutionizing Hubli Landscapes. Discover Dream Properties.
        </h1>

        <button className="primary">Start Exploring</button>
      </div>
      <Section1 blubs={blubs} />
      <Section2 blubs={blubs1} />
      <Section3 blubs={blubs2} />
      <div className="p-5 text-center">
        <h1 className="m-2 text-3xl">Let’s create visionary spaces.</h1>
        <div>
          <button className="secondary">Get Started</button>
        </div>
      </div>
      <div className="p-5 text-center">
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
      <Footer />
    </div>
  );
}
