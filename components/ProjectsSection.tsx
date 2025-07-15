import { BentoGrid } from "@/components/bento-grid"
import { BentoGridItem } from "@/components/bento-grid-item"
import { Brain, Code, Cloud } from "lucide-react"
import Image from "next/image"

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 md:py-32 bg-gray-50 dark:bg-gray-950 relative">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900 dark:text-white">
          Our <span className="text-corexa-blue-600 dark:text-corexa-blue-500">Projects</span>
        </h2>
        <BentoGrid className="max-w-7xl mx-auto">
          <BentoGridItem
            className="md:col-span-2 md:row-span-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
            title="AI-Powered Analytics Dashboard"
            description="A comprehensive dashboard leveraging AI for real-time data insights and predictive analytics."
            header={
              <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-gray-100 dark:from-gray-900 dark:to-gray-800 to-gray-50">
                <Image
                  src="/images/ai-project.jpeg"
                  alt="AI Dashboard"
                  width={600}
                  height={300}
                  className="object-cover w-full h-full rounded-xl"
                />
              </div>
            }
            icon={<Brain className="h-4 w-4 text-corexa-purple-500" />}
          />
          <BentoGridItem
            className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
            title="E-commerce Platform Redesign"
            description="Revamping a large-scale e-commerce platform for enhanced user experience and performance."
            header={
              <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-gray-100 dark:from-gray-900 dark:to-gray-800 to-gray-50">
                <Image
                  src="/images/ecommerce-project.jpeg"
                  alt="E-commerce"
                  width={300}
                  height={300}
                  className="object-cover w-full h-full rounded-xl"
                />
              </div>
            }
            icon={<Code className="h-4 w-4 text-corexa-blue-500" />}
          />




          <BentoGridItem
            className="bg-white  dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
            title="Secure Blockchain Wallet"
            description="Developing a highly secure and user-friendly digital wallet for cryptocurrency management."
            header={
              <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-gray-100 dark:from-gray-900 dark:to-gray-800 to-gray-50">
                <Image
                  src="/images/project-blockchain.jpeg"
                  alt="Blockchain Wallet"
                  width={300}
                  height={300}
                  className="object-cover w-full h-full rounded-xl"
                />
              </div>
            }
            icon={<Code className="h-4 w-4 text-corexa-purple-500" />}
          />
            <BentoGridItem
            className="bg-white md:row-span-2 dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
            title="AI-Powered Budget Planner"
            description="A comprehensive budget planner leveraging AI for real-time data insights and predictive analytics."
            header={
              <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-gray-100 dark:from-gray-900 dark:to-gray-800 to-gray-50">
                <Image
                  src="/images/project-budget.jpeg"
                  alt="Blockchain Wallet"
                  width={300}
                  height={300}
                  className="object-cover w-full h-full rounded-xl"
                />
              </div>
            }
            icon={<Code className="h-4 w-4 text-corexa-purple-500" />}
          />
          <BentoGridItem
            className="md:col-span-2 md:row-span-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
            title="IoT Device Management System"
            description="A robust platform for monitoring and managing a vast network of IoT devices in real-time."
            header={
              <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-gray-100 dark:from-gray-900 dark:to-gray-800 to-gray-50">
                <Image
                  src="/images/project-iot.jpeg"
                  alt="IoT System"
                  width={600}
                  height={300}
                  className="object-cover w-full h-full rounded-xl"
                />
              </div>
            }
            icon={<Cloud className="h-4 w-4 text-corexa-blue-500" />}
          />
        </BentoGrid>
      </div>
    </section>
  )
} 