import Image from 'next/image';
import Head from 'next/head';

const team = [
  {
    name: 'Shaheer Ilyas',
    title: 'CEO & Co-Founder',
    image: '/images/shaheer-ceo.png', // Replace with real image if available
    bio: `Shaheer is a visionary entrepreneur with a passion for innovation and excellence. With a background in business strategy and product development, he has led Corexa Labs to become a trusted partner for businesses seeking digital transformation. Shaheer believes in empowering teams and fostering a culture of creativity and growth.`,
    message: `At Corexa Labs, we believe in pushing the boundaries of innovation. Our mission is to empower businesses with cutting-edge technology and creative solutions. Thank you for trusting us on your journey to success.`,
  },
  {
    name: 'Umar Farooq',
    title: 'CTO & Founder',
    image: '/images/umar-cto.png', // Replace with real image if available
    bio: `Umar is a technology leader with deep expertise in software engineering, architecture, and emerging technologies. As CTO, he ensures that Corexa Labs delivers robust, scalable, and future-ready solutions. Umar is dedicated to building high-performing teams and driving technical excellence.`,
    message: `Technology is at the heart of everything we do. We strive to deliver robust, scalable, and future-ready solutions for our clients. Let's build something extraordinary together!`,
  },
];

export default function TeamPage() {
  return (
    <>
      <Head>
        <title>Our Team | Corexa Labs</title>
        <meta name="description" content="Meet the visionaries and leaders driving Corexa Labs forward. Our founders bring a wealth of experience, passion, and creativity to every project." />
        <meta property="og:title" content="Our Team | Corexa Labs" />
        <meta property="og:description" content="Meet the visionaries and leaders driving Corexa Labs forward. Our founders bring a wealth of experience, passion, and creativity to every project." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://corexalabs.com/team" />
        <link rel="canonical" href="https://corexalabs.com/team" />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-blue-50 text-gray-900 font-sans antialiased dark:bg-gray-950 dark:text-gray-50">
        <div className="max-w-5xl mx-auto px-4 py-16">
          <h1 className="text-5xl font-extrabold mb-6 text-blue-900 text-center">Our Team</h1>
          <p className="text-lg text-gray-600 mb-12 text-center">
            Meet the visionaries and leaders driving Corexa Labs forward. Our founders bring a wealth of experience, passion, and creativity to every project.
          </p>
          <div className="flex flex-col gap-16">
            {team.map((member, idx) => (
              <div
                key={member.name}
                className="flex flex-col md:flex-row items-center bg-white rounded-3xl shadow-2xl overflow-hidden border-t-8 border-blue-500 hover:shadow-blue-200 transition-shadow duration-300"
              >
                <div className="relative w-full md:w-1/3 h-72 md:h-96 flex-shrink-0">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="md:rounded-l-3xl md:rounded-r-none rounded-t-3xl md:rounded-t-none"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="flex-1 p-8 flex flex-col justify-center">
                  <h2 className="text-3xl font-bold text-blue-800 mb-1">{member.name}</h2>
                  <p className="text-blue-500 font-semibold mb-4 text-lg">{member.title}</p>
                  <p className="text-gray-700 mb-4 text-base">{member.bio}</p>
                  <blockquote className="italic text-blue-700 border-l-4 border-blue-300 pl-4 text-lg">
                    “{member.message}”
                  </blockquote>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
} 