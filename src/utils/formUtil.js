export function addOrUpdateForm(form, newItem) {
  let newForm = form.filter(item => item.rule !== newItem.rule)
  newForm.push(newItem)
  return newForm
}

export function getItemFromForm(form, type) {
  let item = form.find(item => item.rule === type)
  if (!item) item = { rule: type }
  return item
}

export function getNewState(state, action, validater, errorMessage) {
  const item = getItemFromForm(state, action.type)
  item.value = action.value
  item.errorMessage = errorMessage
  item.isValid = validater(item.value)
  return addOrUpdateForm(state, item)
}
