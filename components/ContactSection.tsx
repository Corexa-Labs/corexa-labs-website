import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from "lucide-react"
import Link from "next/link"

export function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-32 bg-white dark:bg-gray-950 relative">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900 dark:text-white">
          Get in <span className="text-corexa-blue-600 dark:text-corexa-blue-500">Touch</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8 text-gray-700 dark:text-gray-300">
            <p className="text-lg leading-relaxed">
              Ready to start your next innovative project? Have a question or just want to say hello? Reach out to us using the form or contact details below. We look forward to hearing from you!
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Mail className="h-6 w-6 text-corexa-purple-500" />
                <a href="mailto:info@corexalabs.com" className="hover:text-corexa-blue-500 transition-colors">
                  info@corexalabs.com
                </a>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="h-6 w-6 text-corexa-blue-500" />
                <a href="tel:+1 (705) 482-3454" className="hover:text-corexa-purple-500 transition-colors">
                +1 (705) 482-3454 ,
                </a>
              </div>
              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-corexa-purple-500 flex-shrink-0 mt-1" />
                <span>Bahria Town, Islamabad, Pakistan</span>
              </div>
            </div>
            {/* <div className="flex space-x-6 pt-4">
              <Link href="#" className="text-gray-500 hover:text-corexa-blue-500 transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33V22H12c5.523 0 10-4.477 10-10Z" clipRule="evenodd" />
                </svg>
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-corexa-blue-500 transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c-1.09 0-2.18-.41-3.01-1.24a4.24 4.24 0 0 1-1.24-3.01c0-1.09.41-2.18 1.24-3.01a4.24 4.24 0 0 1 3.01-1.24c1.09 0 2.18.41 3.01 1.24a4.24 4.24 0 0 1 1.24 3.01c0 1.09-.41 2.18-1.24 3.01a4.24 4.24 0 0 1-3.01 1.24Z" />
                </svg>
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-corexa-blue-500 transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.475.083.618-.217.618-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.165-1.11-1.477-1.11-1.477-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.953 0-1.09.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.70.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.099 2.65.64.7 1.028 1.598 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.153.577.62.483C21.133 20.197 24 16.443 24 12.017 24 6.484 19.522 2 14 2h-2Z" clipRule="evenodd" />
                </svg>
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-corexa-blue-500 transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19.812 5.44c1.79 0 3.24 1.45 3.24 3.24v6.64c0 1.79-1.45 3.24-3.24 3.24H4.188c-1.79 0-3.24-1.45-3.24-3.24V8.68c0-1.79 1.45-3.24 3.24-3.24h15.624ZM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5ZM19.812 7.5c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1Z" clipRule="evenodd" />
                </svg>
                <span className="sr-only">Instagram</span>
              </Link>
            </div> */}
          </div>
          {/* <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:border-corexa-blue-500 focus:ring-corexa-blue-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@example.com"
                  className="w-full bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:border-corexa-blue-500 focus:ring-corexa-blue-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Your message..."
                  rows={5}
                  className="w-full bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:border-corexa-blue-500 focus:ring-corexa-blue-500"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-corexa-blue-600 hover:bg-corexa-blue-700 text-white py-3 text-lg rounded-lg shadow-lg transition-all duration-300 hover:scale-[1.02]"
              >
                Send Message
              </Button>
            </form>
          </div> */}
        </div>
      </div>
    </section>
  )
} 