import { Box, Container, css } from "@mui/material"

import DefaultLayout from "../layouts/Default"
import theme from "../theme/themeConfig"
import QuizCard from "../components/QuizCard"
import { getSampleQuiz } from "../store/quiz/reducer"

const HomePage: React.FC = () => {
  const cardsListCss = {
    padding: 10,
    paddingRight: 15,
  }
  const titleCss = {
    marginBottom: 30,
    marginTop: 30,
    height: 75,
  }

  const cardsListMaxHeight =
    document.body.clientHeight -
    [
      80, // layout padding top
      titleCss.marginTop,
      titleCss.marginBottom,
      titleCss.height,
      cardsListCss.padding * 2,
    ].reduce((sum, v) => sum + v)

  return (
    <DefaultLayout>
      <Container
        maxWidth="md"
        css={css({ flexGrow: 1 })}
      >
        <h1
          css={css({
            fontSize: 40,
            textAlign: "center",
            ...titleCss,
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
            maxHeight: cardsListMaxHeight,
            overflowY: "scroll",
            scrollbarColor: `#fff ${theme.palette.info.main}`,
            ...cardsListCss,
          })}
        >
          {new Array(10).fill(getSampleQuiz()).map((quiz, i) => (
            <QuizCard
              key={i}
              quiz={quiz}
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
