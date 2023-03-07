import { Button, css } from "@mui/material"
import { FC } from "react"
import { Link } from "react-router-dom"

import NotFoundSvg from "../components/NotFound/NotFound"
import NotFoundLayout from "../layouts/NotFound"

const NotFoundPage: FC = () => {
  return (
    <NotFoundLayout>
      <NotFoundSvg />

      <div css={css({ position: "absolute", bottom: 100 })}>
        <Link to="/">
          <Button
            color="primary"
            variant="contained"
          >
            Вернуться на домашнюю страницу
          </Button>
        </Link>
      </div>
    </NotFoundLayout>
  )
}

export default NotFoundPage
