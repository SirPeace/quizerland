import { Button, Card } from "@mui/material"
import { ArrowBackIos } from "@mui/icons-material"
import { Container, css } from "@mui/system"
import { FC } from "react"
import { Link } from "react-router-dom"

import DefaultLayout from "../layouts/Default"
import { useSelector } from "react-redux"
import { RootState } from "../store/store"
import QuestionCard from "../components/QuestionCard/QuestionCard"
import QuizFinishCard from "../components/QuizFinishCard/QuizFinishCard"

const LoadingCard = () => (
  <Card css={css({ padding: 20 })}>
    <h3>Your quiz is loading. Wait a sec...</h3>
  </Card>
)

const QuizPage: FC = () => {
  const currentQuiz = useSelector(({ quiz }: RootState) => quiz.current)

  const currentQuestion = currentQuiz?.steps?.find(
    step => step.id === currentQuiz?.currentStepId
  )

  const card = currentQuiz?.isFinished ? (
    <QuizFinishCard quiz={currentQuiz} />
  ) : !currentQuiz || !currentQuestion ? (
    <LoadingCard />
  ) : (
    <QuestionCard question={currentQuestion} />
  )

  return (
    <DefaultLayout>
      <Container maxWidth="md">
        <Link
          to="/quizes"
          css={css({ textDecoration: "none" })}
        >
          <Button
            css={css({
              display: "flex",
              alignItems: "center",
              marginBottom: 10,
            })}
            variant="text"
          >
            <ArrowBackIos />
            Back to quizes list
          </Button>
        </Link>

        {card}
      </Container>
    </DefaultLayout>
  )
}

export default QuizPage
