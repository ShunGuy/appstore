import revalidator from 'revalidator'

export const fields = ['name', 'image', 'link', 'category', 'rank']

export const categories = [
  'Books',
  'Business',
  'Catalogs',
  'Education',
  'Entertainment',
  'Finance',
  'Games',
  'Health & Fitness',
  'Medical',
  'Music',
  'Navigation',
  'News',
  'Newsstand',
  'Photo & Video',
  'Productivity',
  'Reference',
  'Social Networking',
  'Sports',
  'Travel',
]

export const schema = {
  properties: {
    name: {
      type: 'string',
      minLength: 1,
      maxLength: 255,
      required: true,
      allowEmpty: false,
    },
    image: {
      type: 'string',
      format: 'url',
      allowEmpty: true,
    },
    link: {
      type: 'string',
      format: 'url',
      required: true,
      allowEmpty: false,
    },
    category: {
      type: 'string',
      minLength: 3,
      maxLength: 255,
      required: true,
      allowEmpty: false,
      enum: categories,
    },
    rank: {
      required: true,
      allowEmpty: false,
    },
  },
}

export function validateForm(state) {
  const res = revalidator.validate(state, schema)
  if (res.valid) {
    return true
  }
  return res.errors.reduce((errors, error) => (
    { ...errors, [error.property]: [error.message] }
  ), {})
}
