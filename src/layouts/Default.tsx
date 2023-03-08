import { css } from "@emotion/react"
import { MenuRounded } from "@mui/icons-material"
import { IconButton } from "@mui/material"
import { FC, ReactNode } from "react"

type DefaultLayoutProps = {
  children: ReactNode
}

const DefaultLayout: FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <div
      css={css({
        background: "linear-gradient(#e66465, #9198e5)",
        height: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        color: "#fff",
        paddingTop: 80,
      })}
    >
      <IconButton css={css({ position: "fixed", top: 20, left: 20 })}>
        <MenuRounded css={css({ color: "#fff" })} />
      </IconButton>

      {children}
    </div>
  )
}

export default DefaultLayout
