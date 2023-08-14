// Importation de la fonction `configureStore` de Redux Toolkit
// Elle simplifie la création et configuration d'un store Redux
import { configureStore } from '@reduxjs/toolkit'

// Importation du reducer combiné qui gère l'ensemble de l'état de l'application
import rootReducer from '../reducers'

// Création du store Redux en utilisant `configureStore`
// Le store contient tout l'état de l'application et permet les interactions avec cet état
const store = configureStore({
    reducer: rootReducer, // Le reducer principal qui traite toutes les actions et met à jour l'état
})

// Exportation du store pour qu'il soit accessible à l'ensemble de l'application (notamment via le Provider Redux)
export default store
