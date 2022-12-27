import works from '~/assets/data/works.json';

import type { Work } from '~/types/work';

export default defineEventHandler((event) => {
  const name = getRouterParam(event, 'name') as string;

  const work = works.find((work) => work.name === decodeURIComponent(name));

  if (!work) return sendError(event, createError({ statusCode: 404 }));

  return work as Work;
});
