import { createSlice } from "@reduxjs/toolkit";
import { addQuizId } from "../topics/topicsSlice";

const quizzesSlice = createSlice({
    name: 'quizzes',
    initialState: {
        quizzes: {}
    },
    reducers: {
        addQuiz: (state, action) => {
            const newQuiz = {
                [action.payload.id]: {
                    ...action.payload
                }
            };
            state.quizzes = {
                ...state.quizzes,
                ...newQuiz
            };
        }
    }
});

export const selectQuizzes = (state) => state.quizzes.quizzes;

export const { addQuiz } = quizzesSlice.actions;
export default quizzesSlice.reducer;

export const thunkCreateNewQuiz = (payload) => {
    return async (dispatch) => {
        await dispatch(addQuiz(payload));
        await dispatch(addQuizId({
            quizId: payload.id,
            topicId: payload.topicId
            })
        )
    }
};