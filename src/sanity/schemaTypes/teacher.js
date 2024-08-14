export const teacherType = {
  name: 'teacher',
  title: 'Giảng Viên',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Tên',
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

    {
      name: 'bio',
      title: 'Giới thiệu',
      type: 'string'
    },

  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
}