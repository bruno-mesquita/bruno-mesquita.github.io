import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import { routing } from '@/i18n/routing';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

const postsDirectory = path.join(process.cwd(), 'content/posts');

type PostMeta = {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
};

function getPostsByLocale(locale: string): PostMeta[] {
  const localeDir = path.join(postsDirectory, locale);
  if (!fs.existsSync(localeDir)) return [];

  const files = fs.readdirSync(localeDir).filter((f) => f.endsWith('.mdx'));
  return files.map((file) => {
    const content = fs.readFileSync(path.join(localeDir, file), 'utf8');
    const { data } = matter(content);
    return {
      slug: file.replace('.mdx', ''),
      title: data.title,
      date: data.date,
      description: data.description || '',
      tags: data.tags || [],
    };
  });
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'blog' });
  const posts = getPostsByLocale(locale).sort((a, b) =>
    a.date > b.date ? -1 : 1
  );

  return (
    <main className="min-h-screen py-16 px-4 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">{t('title')}</h1>
      <p className="text-lg text-muted-foreground mb-12">{t('description')}</p>

      <div className="space-y-8">
        {posts.map((post) => (
          <article key={post.slug} className="border-b border-border pb-8">
            <div className="flex items-center gap-3 text-sm text-muted-foreground mb-2">
              <time dateTime={post.date}>{post.date}</time>
              {post.tags.length > 0 && (
                <>
                  <span>•</span>
                  <span>{post.tags.join(', ')}</span>
                </>
              )}
            </div>
            <Link href={`/${locale}/blog/${post.slug}`}>
              <h2 className="text-2xl font-semibold hover:text-primary transition-colors">
                {post.title}
              </h2>
            </Link>
            <p className="text-muted-foreground mt-2">{post.description}</p>
          </article>
        ))}
      </div>

      {posts.length === 0 && (
        <p className="text-muted-foreground">{t('noPosts')}</p>
      )}
    </main>
  );
}
