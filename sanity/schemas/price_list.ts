export default {
  name: 'price_list',
  type: 'document',
  title: 'Cenník',
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
      name: 'price_service',
      type: 'string',
      title: 'Cena za službu',
    },
    {
      name: 'tax',
      type: 'string',
      title: 'Spotrebná daň',
    },
    {
      name: 'all',
      type: 'string',
      title: 'Celkom',
    },
    {
      name: 'price_valid_from',
      type: 'string',
      title: 'Cena platná od',
    },
    {
      name: 'pdf',
      title: 'Žiadosť o vypálenie - pdf súbor',
      type: 'file',
      accept: '.pdf',
    },
  ],
}
