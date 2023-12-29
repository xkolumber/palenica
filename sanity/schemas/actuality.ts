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
        source: 'title',
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
      name: 'one_photo',
      type: 'image',
      title: '1 fotka na celú šírku',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'group_images',
      title: 'Skupina obrázkov',
      type: 'array',
      of: [{type: 'image'}],
    },
    {
      name: 'content2',
      type: 'array',
      title: 'Popis 2',
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
  ],
}
