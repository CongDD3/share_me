export default {
  name: 'pin',
  type: 'document',
  title: 'Pin',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'about',
      type: 'string',
      title: 'About',
    },
    {
      name: 'destination',
      title: 'Destination',
      type: 'url',
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
      option: {hotspot: true},
    },
    {
      name: 'userId',
      type: 'string',
      title: 'UserID',
    },
    {
      name: 'postedBy',
      type: 'postedBy',
      title: 'PostedBy',
    },
    {
      name: 'save',
      type: 'array',
      title: 'Save',
      of: [{type: 'save'}],
    },
    {
      name: 'comments',
      type: 'array',
      title: 'Comments',
      of: [{type: 'comment'}],
    },
  ],
}
