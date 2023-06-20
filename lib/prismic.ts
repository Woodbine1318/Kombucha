import { createClient } from '@/prismicio';

export const prismic = createClient({ accessToken: process.env.PRISMIC_ACCESS_TOKEN ?? '' });
