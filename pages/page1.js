const Section1 = ({ blubs }) => {
  return (
    <div className="bg-blue-600 p-3">
      <div className="flex grid grid-cols-3 justify-around w-full">
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
    <div>
      <div>Logo</div>
      <div>
        <div>Home</div>
        <div>Project</div>
        <div>Contact us</div>
      </div>
    </div>
  );
};
const Section2 = ({ blubs }) => {
  return (
    <div className="p-3">
      <div className="flex grid grid-cols-2 justify-around w-full">
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
    <div className="p-3 ">
      <div className="flex grid grid-cols-3 w-full justify-around ">
        {blubs &&
          blubs.map((item) => {
            return (
              <div className="rounded border p-2 m-2">
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
    { title: 'World class courses', subtitle: 'learn from experts' },
    { title: 'Global community', subtitle: 'Connect and Collaborate' },
    { title: 'Career Growth', subtitle: 'Unlock new Opportunities' },
  ];
  const blubs1 = [
    {
      title: 'Unleash Your Potential with Personalized Learning Paths',
      subtitle:
        'With EduHub, your learning experience is tailored to your interests and goals. Our sophisticated AI technology creates a unique learning path for you, ensuring you get the most out of your educational journey.',
      image: '',
    },
    {
      title: 'Top Instructors Bring Learning to Life in Engaging Lectures',
      subtitle:
        'EduHub boasts a lineup of skilled instructors from top institutions around the globe. Experience captivating lectures that delve deep into subjects, inspiring you to think creatively and experientially.',
      image: '',
    },
  ];
  const blubs2 = [
    {
      title:
        'EduHub transformed my learning experience. I’ve never felt so engaged and motivated!',
      author: 'Johnson',
      image: '',
    },
    {
      title:
        'I love the personalized learning paths. They’ve helped me focus on what really matters.',
      author: 'Tyler Norris',
      image: '',
    },
    {
      title:
        'The collaborative projects are fantastic. I’ve made valuable connections!',
      author: 'Zara Wilson',
      image: '',
    },
  ];

  return (
    <div className="bg-blue-500 container h-50">
      <Header />
      <div className="p-5 h-50 min-h-full">
        <h1 className="text-4xl font-bold mt-3 mb-3">
          Revolutionizing Hubli Landscapes. Discover Dream Properties.
        </h1>

        <button className="primary">Start Exploring</button>
      </div>
      <Section1 blubs={blubs} />
      <Section2 blubs={blubs1} />
      <Section3 blubs={blubs2} />
      <div className="bg-blue-400 p-5">
        <h1 className="m-2 text-3xl">
          Don’t just stand on the sidelines. Immerse yourself in the thrilling
          world of EduHub and unlock your true potential!
        </h1>

        <div>
          <button className="secondary">Get Started</button>
          <button className="primary">Learn More</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
