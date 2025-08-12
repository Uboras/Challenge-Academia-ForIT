
import { createRoot } from 'react-dom/client'

import { BrowserRouter} from "react-router";
import Rutas from './routes/routes.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Rutas/>
    </BrowserRouter>
  )
