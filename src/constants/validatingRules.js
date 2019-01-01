const rules = [
  {
    name: 'fullname',
    message: 'Please input at least three characters.',
  },
  {
    name: 'email',
    message: 'Please input valid email.',
  },
  {
    name: 'confirmation',
    message: `Information doesn't match`,
  },
]

const getRules = name => {
  return rules.find(item => item.name === name)
}

export default getRules
