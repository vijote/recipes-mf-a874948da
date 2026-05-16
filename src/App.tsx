import { lazy, Suspense } from 'react'
import './App.css'
const RemoteRecipeList = lazy(() => import('recipes/RecipeList'));
function App() {
  return (
    <>
      <h1>Host app</h1>
      <Suspense fallback={<div>Cargando módulo de recetas...</div>}>
        <RemoteRecipeList />
      </Suspense>
    </>
  )
}

export default App
