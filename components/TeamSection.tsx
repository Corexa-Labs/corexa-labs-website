import Image from 'next/image';

const team = [
  {
    name: 'Shaheer Ilyas',
    title: 'CEO & Co-Founder',
    image: '/images/shaheer-ceo.png', // Replace with real image if available
    message: `At Corexa Labs, we believe in pushing the boundaries of innovation. Our mission is to empower businesses with cutting-edge technology and creative solutions. Thank you for trusting us on your journey to success.`,
  },
  {
    name: 'Umar Farooq',
    title: 'CTO & Founder',
    image: '/images/umar-cto.png', // Replace with real image if available
    message: `Technology is at the heart of everything we do. We strive to deliver robust, scalable, and future-ready solutions for our clients. Let's build something extraordinary together!`,
  },
];

export default function TeamSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-white via-gray-50 to-blue-50" id="team">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-extrabold mb-4 text-blue-900">Meet Our Leadership</h2>
        <p className="text-lg text-gray-600 mb-12">
          Our founders are passionate about driving innovation and delivering excellence. Get to know the visionaries behind Corexa Labs.
        </p>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
          {team.map((member) => (
            <div
              key={member.name}
              className="bg-white rounded-3xl shadow-xl p-8 max-w-sm w-full flex flex-col items-center hover:scale-105 transition-transform duration-300 border-t-4 border-blue-500"
            >
              <div className="w-32 h-32 mb-4 relative rounded-full overflow-hidden border-4 border-blue-200 shadow-md">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="128px"
                />
              </div>
              <h3 className="text-2xl font-bold text-blue-800 mb-1">{member.name}</h3>
              <p className="text-blue-500 font-semibold mb-4">{member.title}</p>
              <p className="text-gray-700 italic">“{member.message}”</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 