export const courseType = {
  name: 'course',
  title: 'Khoá học',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Tên khóa học',
      type: 'string'
    },

    {
      name: 'image',
      title: 'Ảnh',
      type: 'image',
      options: {
        hotspot: true
      },
    },

  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
}