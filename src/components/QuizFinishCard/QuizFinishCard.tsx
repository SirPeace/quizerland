import { Cancel, CheckCircle } from "@mui/icons-material"
import {
  Button,
  Card,
  CardActions,
  CardContent,
  css,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material"
import { FC } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { resetCurrentQuiz } from "../../store/quiz/actions"

import { Quiz } from "../../store/quiz/reducer"

type QuestionCardProps = {
  quiz: Quiz
}

const QuizFinishCard: FC<QuestionCardProps> = ({ quiz }) => {
  const wrongAttemptsCount = 0
  const rightAttemptsCount = 0

  const dispatch = useDispatch()
  const resetQuiz = () => dispatch(resetCurrentQuiz())

  const navigate = useNavigate()

  const finishQuiz = () => {
    setTimeout(resetQuiz, 500)
    navigate("/quizes")
  }

  return (
    <Card
      elevation={12}
      css={css({ padding: "10px 15px" })}
    >
      <Typography variant="h5">
        Your results on: "<strong>{quiz.title}</strong>"
      </Typography>

      <CardContent>
        <List>
          <ListItem>
            <ListItemIcon>
              <Cancel color="error" />
            </ListItemIcon>
            <ListItemText>
              Wrong attempts: <b>{wrongAttemptsCount}</b>
            </ListItemText>
          </ListItem>

          <ListItem>
            <ListItemIcon>
              <CheckCircle color="success" />
            </ListItemIcon>
            <ListItemText>
              Right answers: <b>{rightAttemptsCount}</b>
            </ListItemText>
          </ListItem>
        </List>
      </CardContent>

      <CardActions css={css({ display: "flex", justifyContent: "flex-end" })}>
        <Button
          variant="contained"
          color="secondary"
          onClick={finishQuiz}
        >
          <CheckCircle css={css({ marginRight: 5 })} />
          Finish quiz
        </Button>
      </CardActions>
    </Card>
  )
}

export default QuizFinishCard
