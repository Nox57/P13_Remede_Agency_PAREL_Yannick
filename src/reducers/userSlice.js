import { createSlice } from '@reduxjs/toolkit'

// Définition de l'état initial pour le slice utilisateur
const initialState = {
    firstName: '',
    lastName: '',
    token: null, // pour stocker le JWT
    isLoading: false,
    error: null,
}

// Création du slice pour gérer les informations de l'utilisateur
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        // Reducer pour définir/mettre à jour le prénom et le nom de l'utilisateur
        setUser: (state, action) => {
            state.firstName = action.payload.firstName
            state.lastName = action.payload.lastName
        },
        authStart: (state) => {
            state.isLoading = true
            state.error = null
        },

        authSuccess: (state, action) => {
            state.isLoading = false
            state.token = action.payload.token
        },

        authFailure: (state, action) => {
            state.isLoading = false
            state.error = action.payload.error
        },
    },
})

// Exportation des actions générées pour ce slice
export const { setUser, authStart, authSuccess, authFailure } =
    userSlice.actions

export default userSlice.reducer
