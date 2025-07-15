import Link from 'next/link'

const services = [
  {
    title: 'Web Development',
    slug: 'web-development',
    description: 'Crafting responsive, high-performance web applications tailored to your business needs.'
  },
  {
    title: 'Mobile App Development',
    slug: 'mobile-app-development',
    description: 'Building intuitive and engaging mobile experiences for iOS and Android platforms.'
  },
  {
    title: 'AI & Machine Learning',
    slug: 'ai-machine-learning',
    description: 'Integrating intelligent solutions to automate processes and derive insights from data.'
  },
  {
    title: 'Cloud Solutions',
    slug: 'cloud-solutions',
    description: 'Designing and deploying scalable, secure cloud infrastructures on leading platforms.'
  },
  {
    title: 'Custom Software',
    slug: 'custom-software',
    description: 'Developing bespoke software applications to meet your unique operational requirements.'
  },
  {
    title: 'DevOps & Consulting',
    slug: 'devops-consulting',
    description: 'Optimizing your development pipeline and providing expert technical guidance.'
  }
]

export default function ServicesPage() {
  return (
    <div className="max-w-3xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Services</h1>
      <ul className="space-y-8">
        {services.map(service => (
          <li key={service.slug} className="border rounded-lg p-6 hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold mb-2">{service.title}</h2>
            <p className="mb-4 text-gray-600 dark:text-gray-300">{service.description}</p>
            <Link href={`/services/${service.slug}`} className="text-corexa-purple-500 hover:underline font-medium">Learn More</Link>
          </li>
        ))}
      </ul>
    </div>
  )
} 