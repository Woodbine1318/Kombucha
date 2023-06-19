import { prismic } from '@/lib/prismic';
import { components } from '@/slices';
import { PrismicNextImage } from '@prismicio/next';
import { PrismicLink, SliceZone } from '@prismicio/react';
import { format } from 'date-fns';
import { Metadata, ResolvingMetadata } from 'next';

export const generateMetadata = async ({}: {}, parent: ResolvingMetadata): Promise<Metadata> => {
  const page = await prismic.getByUID('landing_page', 'blog');
  const { meta_title, meta_description } = page.data;

  return {
    title: meta_title || 'Kombucha',
    description: meta_description || '',
  };
};

const BlogPage = async () => {
  const page = await prismic.getByUID('landing_page', 'blog');
  const blogPosts = await prismic.getAllByType('blog_post', {
    orderings: [
      {
        field: 'my.blog_post.published_on',
        direction: 'desc',
      },
    ],
  });

  return (
    <main className="flex min-h-screen flex-col">
      <SliceZone slices={page.data.slices} components={components} />

      <section className="c-container w-full grid grid-cols-1 py-8 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => {
          const hero = post.data.slices.find((slice) => slice.slice_type === 'hero');
          const cover = hero?.primary.background_image;

          return (
            <article
              className="w-full border border-opacity-5 border-black rounded-xl shadow-sm overflow-hidden max-w-md mx-auto"
              key={post.id}
            >
              <div className="w-full h-[180px] bg-gray-100">
                <PrismicLink href={post.url ?? ''}>
                  <PrismicNextImage field={cover} className="object-cover w-full h-full" />
                </PrismicLink>
              </div>

              <div className="px-4 py-2">
                <h2 className="font-medium text-xl">
                  <PrismicLink href={post.url ?? ''}>{post.data.title}</PrismicLink>
                </h2>

                <p className="text-sm opacity-50 mb-2">
                  {format(new Date(post.first_publication_date), 'MMMM d, yyyy')}
                </p>
                <p>{post.data.summary}</p>
              </div>
            </article>
          );
        })}
      </section>
    </main>
  );
};

export default BlogPage;
