import { getTranslations, getLocale } from 'next-intl/server';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { useMDXComponents } from '@/mdx-components';
import rehypePrettyCode from 'rehype-pretty-code';

const postsDirectory = path.join(process.cwd(), 'content/posts');

type PostMeta = {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
  content: string;
};

function getPost(locale: string, slug: string): PostMeta {
  const fullPath = path.join(postsDirectory, locale, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  return {
    slug,
    title: data.title,
    date: data.date,
    description: data.description || '',
    tags: data.tags || [],
    content,
  };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const locale = await getLocale();
  const { slug } = await params;
  const post = getPost(locale, slug);
  return {
    title: post.title,
    description: post.description,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const locale = await getLocale();
  const { slug } = await params;
  const post = getPost(locale, slug);
  const components = useMDXComponents();

  return (
    <article className="min-h-screen py-16 px-4 max-w-3xl mx-auto">
      <header className="mb-12">
        <div className="flex items-center gap-3 text-sm text-muted-foreground mb-4">
          <time dateTime={post.date}>{post.date}</time>
          {post.tags.length > 0 && (
            <>
              <span>•</span>
              <span>{post.tags.join(', ')}</span>
            </>
          )}
        </div>
        <h1 className="text-4xl font-bold">{post.title}</h1>
        {post.description && (
          <p className="text-lg text-muted-foreground mt-4">
            {post.description}
          </p>
        )}
      </header>

      <div className="prose prose-lg max-w-none dark:prose-invert">
        <MDXRemote
          source={post.content}
          components={components}
          options={{
            parseFrontmatter: true,
            mdxOptions: {
              rehypePlugins: [
                [
                  rehypePrettyCode,
                  {
                    theme: 'github-dark',
                    keepBackground: true,
                  },
                ],
              ],
            },
          }}
        />
      </div>
    </article>
  );
}
