import { useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"

const useRedirect = () => {
  const { pathname } = useLocation()
  const navigate = useNavigate()

  /**
   * URLs for redirect `{ from: to }`
   */
  const redirects = {
    "/": "/quizes",
  }

  useEffect(() => {
    Object.entries(redirects).forEach(([from, to]) => {
      if (pathname === from) {
        navigate(to)
      }
    })
  }, [pathname])
}

export default useRedirect
