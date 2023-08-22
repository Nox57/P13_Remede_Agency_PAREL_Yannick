import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// Définition de l'état initial pour le slice utilisateur
const initialState = {
    firstName: '',
    lastName: '',
    // initialisation à partir du localStorage
    token: localStorage.getItem('token') || null, // pour stocker le JWT
    isLoading: false,
    error: null,
}

// Fonction asynchrone pour la connexion utilisateur
export const loginUser = createAsyncThunk('user/login', async (credentials) => {
    const response = await fetch('http://localhost:3001/api/v1/user/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
    })

    const data = await response.json()

    if (!response.ok) {
        throw new Error(data.error || "Erreur lors de l'authentification")
    }

    localStorage.setItem('token', data.body.token) // Sauvegarde du token dans le localStorage ici pour ne pas le répéter
    return { token: data.body.token }
})

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
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.isLoading = true
                state.error = null
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.isLoading = false
                state.token = action.payload.token
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.error.message
            })
    },
})

// Exportation des actions générées pour ce slice
export const { setUser, authStart, authSuccess, authFailure } =
    userSlice.actions

export default userSlice.reducer
