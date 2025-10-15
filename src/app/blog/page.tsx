import { blogPosts } from '@/lib/blog-posts.tsx';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import type { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';
import imageData from '@/lib/placeholder-images.json';

export const metadata: Metadata = {
  title: 'Blog: Tipy a Rady pre Sťahovanie a Upratovanie | VI&MO',
  description: 'Prečítajte si naše tipy, triky a užitočné informácie týkajúce sa sťahovania, vypratávania a upratovacích služieb v Bratislave a okolí.',
};

export default function BlogPage() {
  const sortedPosts = blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="bg-muted/30">
      {/* Hero Section */}
      <section className="relative h-96 w-full flex items-center justify-center text-center text-white">
        <Image
          src={imageData.blogListHero.src}
          alt="Písanie na klávesnici"
          fill
          priority
          className="object-cover object-center brightness-50"
          data-ai-hint={imageData.blogListHero.hint}
        />
        <div className="relative z-10 p-4">
          <h1 className="text-5xl md:text-7xl font-headline leading-tight text-primary-foreground drop-shadow-lg">
            Náš Blog
          </h1>
          <p className="mt-4 text-lg md:text-2xl max-w-3xl mx-auto drop-shadow-md">
            Tipy, triky a rady pre vaše sťahovanie a bývanie.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedPosts.map((post) => (
              <Card key={post.slug} className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl">
                <Link href={`/blog/${post.slug}`} className="block">
                  <div className="relative h-56 w-full">
                    <Image
                      src={post.image}
                      alt={post.image_alt}
                      fill
                      className="object-cover"
                      data-ai-hint={post.image_alt}
                    />
                  </div>
                </Link>
                <CardHeader>
                  <CardTitle className="text-xl font-headline leading-snug">
                    <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                      {post.title}
                    </Link>
                  </CardTitle>
                   <p className="text-sm text-muted-foreground pt-2">
                    Publikované {new Date(post.date).toLocaleDateString('sk-SK')}
                  </p>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription>{post.summary}</CardDescription>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="link" className="p-0 h-auto text-primary">
                    <Link href={`/blog/${post.slug}`}>
                      Čítať viac <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
