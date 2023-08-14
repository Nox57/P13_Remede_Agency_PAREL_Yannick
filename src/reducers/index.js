// Importation de la fonction `combineReducers` de Redux Toolkit
// Elle permet de combiner plusieurs reducers en un seul
import { combineReducers } from '@reduxjs/toolkit'

// Importation du reducer pour gérer l'état utilisateur
import userReducer from './userSlice'

// Utilisation de `combineReducers` pour combiner tous les reducers de l'application
const rootReducer = combineReducers({
    user: userReducer, // L'état de l'utilisateur est géré par `userReducer`
})

// Exportation du reducer combiné pour être utilisé dans le store Redux
export default rootReducer
