// gallery.js
export default {
  name: 'gallery',
  title: 'Galéria',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Názov albumu',
      type: 'string',
    },
    {
      name: 'title_photo',
      type: 'image',
      title: 'Titulná fotka / ideálne priesvitná / vo formáte SVG',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'photos',
      title: 'Fotky',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'image',
              title: 'Fotografia',
              type: 'image',
              options: {
                hotspot: true,
              },
            },
            {
              name: 'description',
              title: 'Popis fotografie',
              type: 'text',
            },
          ],
        },
      ],
    },
  ],
}
