import {
  Cancel,
  CheckCircle,
  RadioButtonCheckedOutlined,
  RadioButtonUncheckedOutlined,
} from "@mui/icons-material"
import {
  Button,
  Card,
  CardActions,
  CardContent,
  css,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material"
import { FC, useState } from "react"
import { useDispatch } from "react-redux"

import { selectAnswer, switchStep } from "../../store/quiz/actions"
import { QuizQuestionStep } from "../../store/quiz/reducer"

type QuestionCardProps = {
  question: QuizQuestionStep
}

const QuestionCard: FC<QuestionCardProps> = ({ question }) => {
  const [wrongAttempt, setWrongAttempt] = useState<number | null>(null)
  const [isChecked, setIsChecked] = useState(false)

  const dispatch = useDispatch()
  const select = (id: number) => dispatch(selectAnswer(id))
  const toNextStep = () => dispatch(switchStep())

  const selectedAnswer = question.answers.find(answer => answer.selected)

  const checkAnswer = () => {
    if (!selectedAnswer) return

    if (selectedAnswer.id === question.rightAnswerId) {
      setWrongAttempt(null)
      setIsChecked(true)

      return setTimeout(() => {
        toNextStep()
        setIsChecked(false)
      }, 500)
    }

    setWrongAttempt(selectedAnswer.id)
  }

  return (
    <Card
      elevation={12}
      css={css({ padding: "10px 15px" })}
    >
      <Typography variant="h5">{question.title}</Typography>

      <CardContent>
        <List>
          {question.answers.map((answer, i) => (
            <ListItem
              disablePadding
              key={i}
            >
              <ListItemButton
                selected={answer.selected && answer.id !== wrongAttempt}
                disabled={wrongAttempt === answer.id}
                onClick={() => select(answer.id)}
              >
                <ListItemIcon>
                  {isChecked && answer.id === question.rightAnswerId ? (
                    <CheckCircle color="success" />
                  ) : wrongAttempt === answer.id ? (
                    <Cancel color="error" />
                  ) : answer.selected ? (
                    <RadioButtonCheckedOutlined color="secondary" />
                  ) : (
                    <RadioButtonUncheckedOutlined />
                  )}
                </ListItemIcon>
                <ListItemText>{answer.text}</ListItemText>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </CardContent>

      <CardActions css={css({ display: "flex", justifyContent: "flex-end" })}>
        <Button
          variant="contained"
          color="secondary"
          disabled={selectedAnswer == null}
          onClick={checkAnswer}
        >
          <CheckCircle css={css({ marginRight: 5 })} />
          Answer
        </Button>
      </CardActions>
    </Card>
  )
}

export default QuestionCard
