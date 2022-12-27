import works from '~/assets/data/works.json';

import type { Work } from '~/types/work';

export default defineEventHandler((context) => {
  return works as Work[];
});
