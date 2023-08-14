// Importation de la fonction `createSlice` de Redux Toolkit
import { createSlice } from '@reduxjs/toolkit'

// Définition de l'état initial pour le slice utilisateur
const initialState = {
    firstName: 'Prénom',
    lastName: 'Nom',
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
    },
})

// Exportation des actions générées pour ce slice
export const { setUser } = userSlice.actions

// Exportation du reducer pour ce slice, qui sera utilisé pour mettre à jour l'état
export default userSlice.reducer
