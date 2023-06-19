import { prismic } from '@/lib/prismic';
import { components } from '@/slices';
import { PrismicRichText, SliceZone } from '@prismicio/react';
import { Metadata, ResolvingMetadata } from 'next';

export const generateMetadata = async (
  { params }: { params: { uid: string } },
  parent: ResolvingMetadata
): Promise<Metadata> => {
  const page = await prismic.getByUID('blog_post', params.uid);
  const { meta_title, meta_description } = page.data;

  return {
    title: meta_title || 'Kombucha',
    description: meta_description || '',
  };
};

const BlogPostPage = async ({ params }: { params: { uid: string } }) => {
  const page = await prismic.getByUID('blog_post', params.uid);

  return (
    <main className="flex min-h-screen flex-col">
      <SliceZone slices={page.data.slices} components={components} />

      <div className="c-container w-full c-rich-text py-8">
        <PrismicRichText field={page.data.content} />
      </div>
    </main>
  );
};

export default BlogPostPage;
