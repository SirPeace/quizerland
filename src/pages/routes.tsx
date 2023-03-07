import { createRef, Ref } from "react"
import { createBrowserRouter, PathRouteProps } from "react-router-dom"
import App from "../App"

import HomePage from "./HomePage"
import NotFoundPage from "./NotFoundPage"
import QuizPage from "./QuizPage"

interface CustomRouteProps extends PathRouteProps {
  nodeRef?: Ref<HTMLDivElement>
}

export const routes: CustomRouteProps[] = [
  {
    path: "/quizes",
    element: <HomePage />,
    nodeRef: createRef(),
  },
  {
    path: "/quizes/:id",
    element: <QuizPage />,
    nodeRef: createRef(),
  },
  {
    path: "*",
    element: <NotFoundPage />,
    nodeRef: createRef(),
  },
]

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: routes.map(route => ({
      path: route.path,
      element: route.element,
    })),
  },
])
