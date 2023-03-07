import { Container } from "@mui/system"
import { FC } from "react"
import DefaultLayout from "../layouts/Default"

const QuizPage: FC = () => {
  return (
    <DefaultLayout>
      <Container maxWidth="md">
        <h1>Quiz page!</h1>
      </Container>
    </DefaultLayout>
  )
}

export default QuizPage
