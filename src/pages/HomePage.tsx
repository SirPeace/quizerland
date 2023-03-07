import React, { useRef } from "react"
import { Box, Container, css } from "@mui/material"

import DefaultLayout from "../layouts/Default"
import theme from "../theme/themeConfig"
import QuizCard from "../components/QuizCard"

const HomePage: React.FC = () => {
  const titleCss = useRef({ marginTop: 80, marginBottom: 30, height: 50 })
  const {
    marginTop: titleMarginTop,
    marginBottom: titleMarginBottom,
    height: titleHeight,
  } = titleCss.current

  return (
    <DefaultLayout>
      <Container maxWidth="md">
        <h1
          css={css({
            fontSize: 40,
            textAlign: "center",
            marginTop: titleMarginTop,
            marginBottom: titleMarginBottom,
            maxHeight: titleHeight,
          })}
        >
          Добро пожаловать в{" "}
          <span
            css={css({
              fontSize: 50,
              fontWeight: 900,
              color: theme.palette.primary.light,
              fontFamily: "Pacifico",
            })}
          >
            Quizerland
          </span>
        </h1>

        <Box
          css={css({
            maxHeight:
              window.screen.availHeight -
              (titleHeight + titleMarginBottom + titleMarginTop + 20),
            overflowY: "scroll",
            padding: 10,
            paddingRight: 15,
            scrollbarColor: `#fff ${theme.palette.info.main}`,
          })}
        >
          {[0, 0, 0].map((_, i) => (
            <QuizCard
              key={i}
              quiz={{ id: i }}
              cardCss={css({
                "&:not(&:last-child)": {
                  marginBottom: 20,
                },
              })}
            />
          ))}
        </Box>
      </Container>
    </DefaultLayout>
  )
}

export default HomePage
