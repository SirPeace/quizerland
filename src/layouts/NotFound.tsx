import { css } from "@emotion/react"
import { MenuRounded } from "@mui/icons-material"
import { IconButton } from "@mui/material"
import { FC, ReactNode } from "react"

type NotFoundLayoutProps = {
  children: ReactNode
}

const NotFoundLayout: FC<NotFoundLayoutProps> = ({ children }) => {
  return (
    <div
      css={css({
        background: "linear-gradient(#E0E0E0, #4C423B)",
        height: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        color: "#fff",
        position: "relative",
      })}
    >
      <IconButton css={css({ position: "fixed", top: 20, left: 20 })}>
        <MenuRounded css={css({ color: "#4C423B" })} />
      </IconButton>

      {children}
    </div>
  )
}

export default NotFoundLayout
