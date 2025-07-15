import { notFound } from 'next/navigation'
import Head from 'next/head'
import { Code, Smartphone, Brain, Cloud, Wrench, Settings, ArrowRight } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion'

const services = [
  {
    title: 'Web Development',
    slug: 'web-development',
    description: 'Crafting responsive, high-performance web applications tailored to your business needs.',
    icon: <Code className="h-12 w-12 text-corexa-blue-500 mb-4" />,
    features: [
      'Responsive & Mobile-First Design',
      'Performance Optimization',
      'SEO Best Practices',
      'E-commerce & CMS Solutions',
      'Progressive Web Apps',
    ],
    process: [
      'Discovery & Planning',
      'UI/UX Design',
      'Development',
      'Testing & QA',
      'Deployment & Support',
    ],
    benefits: [
      'Custom solutions tailored to your brand',
      'Fast, secure, and scalable websites',
      'Ongoing support and maintenance',
    ],
    faqs: [
      {
        q: 'How long does a typical web project take?',
        a: 'Most projects are completed in 4-12 weeks, depending on complexity.'
      },
      {
        q: 'Do you offer website maintenance?',
        a: 'Yes, we provide ongoing support and maintenance packages.'
      }
    ],
    seo: {
      title: 'Web Development Services | Corexa Labs',
      description: 'Expert web development services for modern, high-performance, and scalable web applications.'
    },
    og: {
      image: '/public/images/ai-project.jpeg',
      url: 'https://corexalabs.com/services/web-development'
    }
  },
  {
    title: 'Mobile App Development',
    slug: 'mobile-app-development',
    description: 'Building intuitive and engaging mobile experiences for iOS and Android platforms.',
    icon: <Smartphone className="h-12 w-12 text-corexa-purple-500 mb-4" />,
    features: [
      'Native & Cross-Platform Apps',
      'App Store Optimization',
      'Push Notifications',
      'API Integrations',
      'User Analytics',
    ],
    process: [
      'Requirement Analysis',
      'Wireframing',
      'Development',
      'Testing',
      'Launch & Support',
    ],
    benefits: [
      'Seamless user experiences',
      'Apps for iOS & Android',
      'Post-launch support',
    ],
    faqs: [
      {
        q: 'Can you build for both iOS and Android?',
        a: 'Absolutely! We offer both native and cross-platform solutions.'
      },
      {
        q: 'Do you help with app store submission?',
        a: 'Yes, we guide you through the entire launch process.'
      }
    ],
    seo: {
      title: 'Mobile App Development | Corexa Labs',
      description: 'Professional mobile app development for iOS and Android, delivering seamless user experiences.'
    },
    og: {
      image: '/public/images/ecommerce-project.jpeg',
      url: 'https://corexalabs.com/services/mobile-app-development'
    }
  },
  {
    title: 'AI & Machine Learning',
    slug: 'ai-machine-learning',
    description: 'Integrating intelligent solutions to automate processes and derive insights from data.',
    icon: <Brain className="h-12 w-12 text-corexa-blue-500 mb-4" />,
    features: [
      'Predictive Analytics',
      'Natural Language Processing',
      'Computer Vision',
      'Custom AI Models',
      'Data Engineering',
    ],
    process: [
      'Data Collection',
      'Model Design',
      'Training & Validation',
      'Deployment',
      'Monitoring & Improvement',
    ],
    benefits: [
      'Automate repetitive tasks',
      'Gain actionable insights',
      'Stay ahead with innovation',
    ],
    faqs: [
      {
        q: 'What industries do you serve?',
        a: 'We work with healthcare, finance, retail, and more.'
      },
      {
        q: 'Can you integrate AI into existing systems?',
        a: 'Yes, we specialize in seamless AI integrations.'
      }
    ],
    seo: {
      title: 'AI & Machine Learning Solutions | Corexa Labs',
      description: 'Cutting-edge AI and machine learning services to automate, analyze, and innovate.'
    },
    og: {
      image: '/public/images/ai-project.jpeg',
      url: 'https://corexalabs.com/services/ai-machine-learning'
    }
  },
  {
    title: 'Cloud Solutions',
    slug: 'cloud-solutions',
    description: 'Designing and deploying scalable, secure cloud infrastructures on leading platforms.',
    icon: <Cloud className="h-12 w-12 text-corexa-purple-500 mb-4" />,
    features: [
      'Cloud Migration',
      'DevOps Automation',
      'Serverless Architectures',
      'Disaster Recovery',
      'Cost Optimization',
    ],
    process: [
      'Assessment',
      'Architecture Design',
      'Migration',
      'Optimization',
      'Ongoing Management',
    ],
    benefits: [
      'Reduce IT costs',
      'Scale effortlessly',
      'Enhance security',
    ],
    faqs: [
      {
        q: 'Which cloud platforms do you support?',
        a: 'AWS, Azure, Google Cloud, and more.'
      },
      {
        q: 'Can you help with cloud security?',
        a: 'Yes, security is a core part of our cloud solutions.'
      }
    ],
    seo: {
      title: 'Cloud Solutions | Corexa Labs',
      description: 'Secure, scalable cloud solutions for businesses leveraging AWS, Azure, and Google Cloud.'
    },
    og: {
      image: '/public/images/project-blockchain.jpeg',
      url: 'https://corexalabs.com/services/cloud-solutions'
    }
  },
  {
    title: 'Custom Software',
    slug: 'custom-software',
    description: 'Developing bespoke software applications to meet your unique operational requirements.',
    icon: <Wrench className="h-12 w-12 text-corexa-blue-500 mb-4" />,
    features: [
      'Tailored Business Solutions',
      'API & System Integrations',
      'Legacy System Modernization',
      'Workflow Automation',
      'SaaS Platforms',
    ],
    process: [
      'Consultation',
      'Solution Design',
      'Development',
      'Testing',
      'Deployment',
    ],
    benefits: [
      'Software that fits your needs',
      'Future-proof architecture',
      'Dedicated support',
    ],
    faqs: [
      {
        q: 'Can you modernize old software?',
        a: 'Yes, we specialize in legacy system upgrades.'
      },
      {
        q: 'Do you build SaaS products?',
        a: 'Absolutely, from MVP to full-scale SaaS platforms.'
      }
    ],
    seo: {
      title: 'Custom Software Development | Corexa Labs',
      description: 'Tailored software solutions designed to fit your business needs perfectly.'
    },
    og: {
      image: '/public/images/project-budget.jpeg',
      url: 'https://corexalabs.com/services/custom-software'
    }
  },
  {
    title: 'DevOps & Consulting',
    slug: 'devops-consulting',
    description: 'Optimizing your development pipeline and providing expert technical guidance.',
    icon: <Settings className="h-12 w-12 text-corexa-purple-500 mb-4" />,
    features: [
      'CI/CD Automation',
      'Infrastructure as Code',
      'Monitoring & Logging',
      'Cloud Cost Management',
      'Technical Audits',
    ],
    process: [
      'Assessment',
      'Strategy & Roadmap',
      'Implementation',
      'Training',
      'Continuous Improvement',
    ],
    benefits: [
      'Faster release cycles',
      'Reduced downtime',
      'Expert guidance',
    ],
    faqs: [
      {
        q: 'Do you offer DevOps training?',
        a: 'Yes, we empower your team with best practices.'
      },
      {
        q: 'Can you audit our current setup?',
        a: 'We provide comprehensive technical audits and recommendations.'
      }
    ],
    seo: {
      title: 'DevOps & Consulting | Corexa Labs',
      description: 'DevOps services and technical consulting to streamline your development and operations.'
    },
    og: {
      image: '/public/images/project-iot.jpeg',
      url: 'https://corexalabs.com/services/devops-consulting'
    }
  }
]

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = services.find(s => s.slug === params.slug)
  if (!service) return notFound()

  return (
    <>
      <Head>
        <title>{service.seo.title}</title>
        <meta name="description" content={service.seo.description} />
        <meta property="og:title" content={service.seo.title} />
        <meta property="og:description" content={service.seo.description} />
        <meta property="og:image" content={service.og.image} />
        <meta property="og:url" content={service.og.url} />
        <link rel="canonical" href={service.og.url} />
      </Head>
      <section className="min-h-[60vh] flex flex-col items-center justify-center py-20 px-4 bg-gradient-to-br from-corexa-blue-50 to-corexa-purple-50 dark:from-corexa-blue-950 dark:to-corexa-purple-950">
        {service.icon}
        <h1 className="text-5xl font-bold mb-4 text-center text-corexa-purple-700 dark:text-corexa-purple-300 drop-shadow-lg">{service.title}</h1>
        <p className="max-w-2xl text-lg text-center text-gray-700 dark:text-gray-200 mb-10">{service.description}</p>
        {/* SEO-rich paragraphs for each service */}
        {service.slug === 'web-development' && (
          <div className="max-w-3xl mb-10 text-gray-800 dark:text-gray-100 space-y-6 text-base md:text-lg">
            <p>At Corexa Labs, our web development services are designed to help your business thrive in the digital age. We combine cutting-edge technologies with creative design to build websites that are not only visually stunning but also optimized for speed, security, and scalability. Whether you need a robust e-commerce platform, a sleek corporate site, or a custom web application, our team delivers solutions that drive engagement and conversions.</p>
            <p>We prioritize SEO from the ground up, ensuring your website ranks highly on search engines and attracts your target audience. Our responsive, mobile-first approach guarantees a seamless experience across all devices, while our ongoing support keeps your site performing at its best.</p>
          </div>
        )}
        {service.slug === 'mobile-app-development' && (
          <div className="max-w-3xl mb-10 text-gray-800 dark:text-gray-100 space-y-6 text-base md:text-lg">
            <p>Our mobile app development team crafts intuitive, high-performance apps for both iOS and Android. We focus on user experience, ensuring every app is easy to use, visually appealing, and built to scale. From concept to launch, we guide you through every step, leveraging the latest frameworks and technologies to deliver apps that stand out in the crowded marketplace.</p>
            <p>With expertise in native and cross-platform development, we help you reach a wider audience and achieve your business goals. Our apps are optimized for performance, security, and discoverability in app stores, giving you a competitive edge.</p>
          </div>
        )}
        {service.slug === 'ai-machine-learning' && (
          <div className="max-w-3xl mb-10 text-gray-800 dark:text-gray-100 space-y-6 text-base md:text-lg">
            <p>Unlock the power of artificial intelligence and machine learning with Corexa Labs. We design and implement intelligent systems that automate processes, analyze data, and deliver actionable insights. Our AI solutions are tailored to your industry and business needs, helping you innovate and stay ahead of the competition.</p>
            <p>From predictive analytics to natural language processing and computer vision, we bring advanced AI capabilities to your organization. Our team ensures seamless integration with your existing systems, maximizing ROI and driving digital transformation.</p>
          </div>
        )}
        {service.slug === 'cloud-solutions' && (
          <div className="max-w-3xl mb-10 text-gray-800 dark:text-gray-100 space-y-6 text-base md:text-lg">
            <p>Embrace the future of IT with our comprehensive cloud solutions. We help businesses migrate to the cloud, optimize infrastructure, and implement best-in-class security practices. Our cloud architects design scalable, resilient systems that reduce costs and improve operational efficiency.</p>
            <p>Whether you’re moving to AWS, Azure, or Google Cloud, we provide end-to-end support, from initial assessment to ongoing management. Our expertise in DevOps and automation ensures your cloud environment is always optimized for performance and reliability.</p>
          </div>
        )}
        {service.slug === 'custom-software' && (
          <div className="max-w-3xl mb-10 text-gray-800 dark:text-gray-100 space-y-6 text-base md:text-lg">
            <p>Every business is unique, and so are our software solutions. Corexa Labs specializes in developing custom software that aligns perfectly with your workflows, goals, and growth plans. We take the time to understand your requirements, designing applications that are robust, scalable, and easy to maintain.</p>
            <p>From automating manual processes to integrating with third-party systems, our custom software empowers your team and streamlines operations. We use modern technologies and agile methodologies to deliver results quickly and efficiently.</p>
          </div>
        )}
        {service.slug === 'devops-consulting' && (
          <div className="max-w-3xl mb-10 text-gray-800 dark:text-gray-100 space-y-6 text-base md:text-lg">
            <p>Accelerate your software delivery and improve reliability with our DevOps and consulting services. We help organizations implement CI/CD pipelines, automate infrastructure, and adopt best practices for monitoring and security. Our consultants work closely with your team to identify bottlenecks and optimize every stage of your development lifecycle.</p>
            <p>With a focus on collaboration and continuous improvement, we enable faster releases, reduced downtime, and greater agility. Trust Corexa Labs to guide your DevOps transformation and unlock your team’s full potential.</p>
          </div>
        )}
        {/* End SEO-rich paragraphs */}
        <a href="/contact" className="inline-block bg-corexa-purple-600 hover:bg-corexa-purple-700 text-white font-semibold px-8 py-3 rounded-lg shadow-lg transition text-lg mb-8">Get Started</a>
        <div className="w-full max-w-4xl grid md:grid-cols-2 gap-8 mb-16">
          <Card className="bg-white/80 dark:bg-black/60">
            <CardHeader>
              <CardTitle>Key Features</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                {service.features.map((f, i) => <li key={i}>{f}</li>)}
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-white/80 dark:bg-black/60">
            <CardHeader>
              <CardTitle>Our Process</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="list-decimal pl-5 space-y-2">
                {service.process.map((step, i) => <li key={i}>{step}</li>)}
              </ol>
            </CardContent>
          </Card>
        </div>
        <Card className="w-full max-w-4xl bg-gradient-to-r from-corexa-purple-100 to-corexa-blue-100 dark:from-corexa-purple-900 dark:to-corexa-blue-900 mb-12">
          <CardHeader>
            <CardTitle>Why Choose Us?</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="flex flex-col md:flex-row gap-6 md:gap-12 justify-center items-center">
              {service.benefits.map((b, i) => <li key={i} className="text-lg font-medium text-corexa-purple-700 dark:text-corexa-purple-200 flex items-center gap-2"><ArrowRight className="h-5 w-5" />{b}</li>)}
            </ul>
          </CardContent>
        </Card>
        <div className="w-full max-w-4xl mb-12">
          <Accordion type="single" collapsible>
            {service.faqs.map((faq, i) => (
              <AccordionItem value={`faq-${i}`} key={i}>
                <AccordionTrigger className="text-lg font-semibold text-corexa-blue-700 dark:text-corexa-blue-200">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-gray-700 dark:text-gray-300">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <a href="/contact" className="inline-block bg-gradient-to-r from-corexa-purple-600 to-corexa-blue-600 hover:from-corexa-purple-700 hover:to-corexa-blue-700 text-white font-semibold px-10 py-4 rounded-xl shadow-xl transition text-xl">Request a Free Consultation</a>
      </section>
    </>
  )
} 