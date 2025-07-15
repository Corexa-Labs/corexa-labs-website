import { notFound } from 'next/navigation';
import fs from 'fs';
import path from 'path';
import Head from 'next/head';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';

function getBlogData(slug: string) {
  const filePath = path.join(process.cwd(), 'app/blogs/blogs-data.json');
  const file = fs.readFileSync(filePath, 'utf-8');
  const blogs = JSON.parse(file);
  return blogs.find((b: any) => b.slug === slug);
}

export default function BlogPage({ params }: { params: { slug: string } }) {
  const blog = getBlogData(params.slug);
  if (!blog) return notFound();

  return (
    <>
      <Head>
        <title>{blog.metaTitle}</title>
        <meta name="description" content={blog.metaDescription} />
      </Head>
      <Header />
      <main className="max-w-3xl mx-auto pt-32 pb-16 px-4">
        <Card className="mb-8">
          <img
            src={blog.image}
            alt={blog.imageAlt}
            className="w-full rounded-t-lg object-cover max-h-80"
          />
          <CardContent>
            <h1 className="text-4xl font-bold mb-6 mt-4 text-center">{blog.title}</h1>
            {blog.sections.map((section: any, i: number) => (
              <section key={i} className="mb-8">
                {section.heading !== 'Intro' && (
                  <h2 className="text-2xl font-semibold mb-3 mt-8">{section.heading}</h2>
                )}
                <div
                  className="prose prose-lg max-w-none text-gray-700 dark:text-gray-200"
                  dangerouslySetInnerHTML={{ __html: section.content }}
                />
              </section>
            ))}
          </CardContent>
        </Card>
      </main>
      <Footer />
    </>
  );
} 