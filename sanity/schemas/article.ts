export default {
  name: 'actuality',
  type: 'document',
  title: 'Aktuality',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Nadpis',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'nadpis',
      },
    },
    {
      name: 'content',
      type: 'array',
      title: 'Popis',
      of: [
        {
          type: 'block',
        },
        {
          type: 'image',
          fields: [
            {
              type: 'text',
              name: 'alt',
              title: 'Alternative Text',
            },
          ],
        },
      ],
    },
    {
      name: 'time_reading',
      type: 'string',
      title: 'Čas čítania',
    },
    {
      name: 'authors',
      type: 'array',
      title: 'Autori',
      of: [{type: 'string'}],
      options: {
        layout: 'tags',
      },
    },
  ],
}
