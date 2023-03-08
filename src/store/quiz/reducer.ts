import { Reducer } from "@reduxjs/toolkit"
import { QuizAction } from "./actions"

export type Answer = {
  id: number
  text: string
  selected: boolean
}

export type QuizQuestionStep = {
  id: number
  title: string
  rightAnswerId: number
  answers: Answer[]
}

export type Quiz = {
  id: number
  title: string
  description: string
  currentStepId: number
  isFinished: boolean
  steps: QuizQuestionStep[]
}

export type QuizState = {
  list: Quiz[]
  current?: Quiz
}

const initialState: QuizState = {
  list: [],
  current: undefined,
}

const quizReducer: Reducer<QuizState, QuizAction> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case "SELECT_QUIZ":
      return {
        ...state,
        current: getSampleQuiz(action.payload.id),
      }

    case "SELECT_ANSWER":
      if (!state.current) return state
      return {
        ...state,
        current: {
          ...state.current,
          steps:
            state?.current?.steps?.map(step => ({
              ...step,
              answers: step.answers.map(answer =>
                answer.id === action.payload.id
                  ? { ...answer, selected: true }
                  : { ...answer, selected: false }
              ),
            })) ?? [],
        },
      }

    case "SWITCH_STEP":
      if (!state.current) return state

      const currentStep = state.current?.currentStepId ?? 0

      if (currentStep + 1 > state.current.steps.length) {
        return {
          ...state,
          current: {
            ...state.current,
            isFinished: true,
          },
        }
      }

      return {
        ...state,
        current: {
          ...state.current,
          currentStepId: currentStep + 1,
        },
      }

    case "RESET_CURRENT_QUIZ":
      return {
        ...state,
        current: undefined,
      }

    default:
      return state
  }
}

export default quizReducer

export function getSampleQuiz(id: number = 1): Quiz {
  return {
    id,
    title: "Super mega quiz",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A ab eum unde necessitatibus nostrum provident et at debitis libero est.",
    currentStepId: 1,
    isFinished: false,
    steps: [
      {
        id: 1,
        rightAnswerId: 2,
        title: "What is the capital of Great Britain?",
        answers: [
          {
            id: 1,
            selected: false,
            text: "Paris",
          },
          {
            id: 2,
            selected: false,
            text: "London",
          },
          {
            id: 3,
            selected: false,
            text: "Moscow",
          },
          {
            id: 4,
            selected: false,
            text: "Tokyo",
          },
          {
            id: 5,
            selected: false,
            text: "Toronto",
          },
        ],
      },
      {
        id: 2,
        rightAnswerId: 6,
        title: "How many fingers does human normally have?",
        answers: [
          {
            id: 6,
            selected: false,
            text: "20",
          },
          {
            id: 7,
            selected: false,
            text: "10",
          },
          {
            id: 8,
            selected: false,
            text: "5",
          },
        ],
      },
    ],
  }
}
