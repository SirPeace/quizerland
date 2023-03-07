import { CSSProperties } from "react"
import { useLocation, useOutlet } from "react-router-dom"
import { SwitchTransition, Transition } from "react-transition-group"

import { routes } from "./pages/routes"
import useRedirect from "./hooks/useRedirect"

function App() {
  const { pathname } = useLocation()
  let currentOutlet = useOutlet()
  useRedirect()

  const { nodeRef } = routes.find(route => route.path === pathname) ?? {}

  const containerStyle: CSSProperties = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
  }

  const transitionStyles: { [k: string]: CSSProperties } = {
    entering: {
      opacity: 0,
      transform: "scale(1.1)",
      transition: "opacity 300ms, transform 300ms",
    },

    entered: {
      opacity: 1,
      transform: "scale(1)",
      transition: "opacity 300ms, transform 300ms",
    },

    exiting: {
      opacity: 0,
      transform: "scale(1)",
      transition: "opacity 300ms, transform 300ms",
    },

    exited: {
      opacity: 1,
      transform: "scale(0.9)",
      transition: "opacity 300ms, transform 300ms",
    },
  }

  return (
    <SwitchTransition mode="in-out">
      <Transition
        key={pathname}
        nodeRef={nodeRef}
        timeout={300}
      >
        {state => (
          <div
            ref={nodeRef}
            style={{
              ...containerStyle,
              ...transitionStyles[state],
            }}
          >
            {currentOutlet}
          </div>
        )}
      </Transition>
    </SwitchTransition>
  )
}

export default App
