import { Box, Button, Card, CardContent, CardHeader, css } from "@mui/material"
import { SerializedStyles } from "@mui/styled-engine"
import { FC, useState } from "react"
import { Link } from "react-router-dom"

type QuizCardProps = {
  quiz: {
    id: number
  }
  cardCss?: SerializedStyles
}

const QuizCard: FC<QuizCardProps> = ({ quiz, cardCss }) => {
  const [isHovered, setIsHovered] = useState(false)

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
        title="Название теста"
      />
      <CardContent>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. A ab eum unde
        necessitatibus nostrum provident et at debitis libero est.
      </CardContent>
      <Box css={css({ display: "flex", padding: 10 })}>
        <Box css={css({ flexGrow: 1 })} />
        <Box>
          <Link to={`/quizes/${quiz.id}`}>
            <Button
              css={css({ marginRight: 10 })}
              color="primary"
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
