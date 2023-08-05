import { useState, useEffect } from 'react'

const useFetch = (urlOrFunction) => {
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [data, setData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        let fetchedData

        if (typeof urlOrFunction === 'string') {
          const resp = await fetch(urlOrFunction)
          if (!resp.ok) {
            setIsError(true)
            setIsLoading(false)
            return
          }
          fetchedData = await resp.json()
        } else if (typeof urlOrFunction === 'function') {
          fetchedData = await urlOrFunction()
        } else {
          throw new Error('Invalid argument. Please provide a URL or a fetch function.')
        }

        setData(fetchedData)
      } catch (error) {
        setIsError(error)
      }

      setIsLoading(false)
    }

    fetchData()
  }, [])

  return { isLoading, isError, data }
}

export default useFetch
