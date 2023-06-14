import { createClient } from '@/prismicio';
import { components } from '@/slices';
import { SliceZone } from '@prismicio/react';

const Home = async () => {
  const client = createClient();

  const page = await client.getByUID('landing_page', 'home');

  return (
    <main className="flex min-h-screen flex-col">
      <SliceZone slices={page.data.slices} components={components} />
    </main>
  );
};

export default Home;
