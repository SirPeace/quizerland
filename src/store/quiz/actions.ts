export type QuizAction =
  | SelectQuizAction
  | SelectAnswerAction
  | SwitchStepAction
  | ResetQuizAction

type SelectQuizAction = {
  type: "SELECT_QUIZ"
  payload: {
    id: number
  }
}
export function selectQuiz(id: number): SelectQuizAction {
  return {
    type: "SELECT_QUIZ",
    payload: { id },
  }
}

type SelectAnswerAction = {
  type: "SELECT_ANSWER"
  payload: {
    id: number
  }
}
export function selectAnswer(id: number): SelectAnswerAction {
  return {
    type: "SELECT_ANSWER",
    payload: { id },
  }
}

type SwitchStepAction = {
  type: "SWITCH_STEP"
  payload: {
    id: number
  }
}
export function switchStep(stepId: number = 0) {
  return {
    type: "SWITCH_STEP",
    payload: {
      id: stepId,
    },
  }
}

type ResetQuizAction = {
  type: "RESET_CURRENT_QUIZ"
}
export function resetCurrentQuiz() {
  return {
    type: "RESET_CURRENT_QUIZ",
  }
}
