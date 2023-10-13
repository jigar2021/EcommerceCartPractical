/**
 * Set localStorage
 */
export const setStore = (name, content) => {
  if (!name) return
  if (typeof content !== 'string') {
    content = JSON.stringify(content)
  }
  return window.localStorage.setItem(name, content)
}
export const getStore = (name) => {
  if (!name) return
  return JSON.parse(window.localStorage.getItem(name))
}
export const removeItem = (name) => {
  if (!name) return
  return window.localStorage.removeItem(name)
}
export const capitalizeFirstLetter = (value) => {
  return value.charAt(0).toUpperCase() + value.slice(1)
}

export const lowercaseFirstLetter = (value) => {
  return value.charAt(0).toLowerCase() + value.slice(1)
}