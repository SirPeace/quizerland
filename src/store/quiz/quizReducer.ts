import { Action, Reducer } from "@reduxjs/toolkit"

type Answer = {
  id: number
  text: string
}

type QuizQuestionStep = {
  id: number
  title: string
  rightAnswerId: number
  order: number
  answers: Answer[]
}

type QuizState = {
  id?: number
  title: string
  currentStepId?: number
  steps: QuizQuestionStep[]
}

const initialState: QuizState = {
  id: undefined,
  title: "",
  currentStepId: undefined,
  steps: [],
}

const quizReducer: Reducer<QuizState> = (
  state = initialState,
  action: Action
) => {
  switch (action.type) {
    default:
      return state
  }
}

export default quizReducer
