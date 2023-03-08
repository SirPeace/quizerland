import { Box, Button, Card, CardContent, CardHeader, css } from "@mui/material"
import { SerializedStyles } from "@mui/styled-engine"
import { FC, useState } from "react"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { selectQuiz } from "../store/quiz/actions"
import { Quiz } from "../store/quiz/reducer"

type QuizCardProps = {
  quiz: Quiz
  cardCss?: SerializedStyles
}

const QuizCard: FC<QuizCardProps> = ({ quiz, cardCss }) => {
  const [isHovered, setIsHovered] = useState(false)

  const dispatch = useDispatch()
  const setCurrentQuiz = () => dispatch(selectQuiz(quiz.id))

  return (
    <Card
      css={cardCss}
      sx={{
        borderRadius: 3,
      }}
      elevation={isHovered ? 5 : 1}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardHeader
        css={css({ color: "#000" })}
        title={quiz.title}
      />
      <CardContent>{quiz.description}</CardContent>
      <Box css={css({ display: "flex", padding: 10 })}>
        <Box css={css({ flexGrow: 1 })} />
        <Box>
          <Link to={`/quizes/${quiz.id}`}>
            <Button
              css={css({ marginRight: 10 })}
              color="primary"
              onClick={setCurrentQuiz}
            >
              To the quiz
            </Button>
          </Link>
        </Box>
      </Box>
    </Card>
  )
}

export default QuizCard
