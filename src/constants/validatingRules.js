const validationRules = [
  {
    name: 'fullname',
    message: 'Please input at least three characters.',
    isValid: value => value.length >= 3,
  },
  {
    name: 'email',
    message: 'Please input valid email.',
    isValid: value =>
      value.match(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      ),
  },
  {
    name: 'confirmEmail',
    message: `Email doesn't match`,
    isValid: value => value.email === value.confirmed,
  },
]

const getRules = name => {
  return validationRules.find(item => item.name === name)
}

export default getRules
