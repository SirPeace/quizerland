import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import { QuizAction } from "./quiz/actions"

import quizReducer, { QuizState } from "./quiz/reducer"

type RootReducer = {
  quiz: QuizState
}

type RootAction = QuizAction

export const store = configureStore<RootReducer, RootAction>({
  reducer: {
    quiz: quizReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
