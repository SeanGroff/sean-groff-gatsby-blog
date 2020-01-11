import React from 'react'

export function useLocalStorage(key, initialValue) {
  const setInitialValue = React.useCallback(() => {
    try {
      const item = window.localStorage.getItem(key)
      const test = item ? JSON.parse(item) : initialValue
      return test
    } catch (error) {
      return initialValue
    }
  }, [initialValue, key])

  const [storedValue, setStoredValue] = React.useState(setInitialValue)

  // Return a wrapped version of useState's setter function that...
  // ...persists the new value to localStorage.
  const setValue = React.useCallback(
    value => {
      try {
        setStoredValue(value)

        // Save to local storage
        window.localStorage.setItem(key, JSON.stringify(value))
      } catch (error) {
        // TODO: handle error
        console.error(error)
      }
    },
    [key]
  )

  return [storedValue, setValue]
}
