export default {
  name: 'article',
  type: 'document',
  title: 'Článok',
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
        source: 'title',
      },
    },
    {
      name: 'photo',
      type: 'image',
      title: 'Titulná fotka',
      options: {
        hotspot: true,
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
