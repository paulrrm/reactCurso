
import { BrowserRouter,Routes } from "react-router-dom"
import { renderRoutes } from "./routes"

const App = () => {
  return (
    <BrowserRouter>
     
    <Routes>
      {renderRoutes()}
    </Routes>
    </BrowserRouter>
  )
}

export default App