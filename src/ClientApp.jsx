import { hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './component/App'
import './index.css'

hydrateRoot(
    document.getElementById('root'),
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root'),
)
