import isEmail from 'validator/lib/isEmail'

export function email(value) {
  return value && !isEmail(value.trim()) ? 'El email no es válido' : null
}

function isDirty(value) {
  return value || value === 0
}

export function required(requiredFields, values) {
  return requiredFields.reduce(
    (fields, field) => ({
      ...fields,
      ...(isDirty(values[field]) ? undefined : { [field]: 'El campo es requerido' }),
    }),
    {},
  )
}
