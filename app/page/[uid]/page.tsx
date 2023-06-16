import { prismic } from '@/lib/prismic';
import { components } from '@/slices';
import { SliceZone } from '@prismicio/react';
import { Metadata, ResolvingMetadata } from 'next';

export const generateMetadata = async (
  { params }: { params: { uid: string } },
  parent?: ResolvingMetadata
): Promise<Metadata> => {
  const page = await prismic.getByUID('landing_page', params.uid);
  const { meta_title, meta_description } = page.data;

  return {
    title: meta_title || 'Kombucha',
    description: meta_description || '',
  };
};

const LandingPage = async ({ params }: { params: { uid: string } }) => {
  const page = await prismic.getByUID('landing_page', params.uid);

  return (
    <main className="flex min-h-screen flex-col">
      <SliceZone slices={page.data.slices} components={components} />
    </main>
  );
};

export default LandingPage;
