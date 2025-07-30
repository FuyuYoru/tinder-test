import { createRoot } from 'react-dom/client'
import App from '@app/App'
import { worker } from '@mock/browser'


async function start() {
    await worker.start()

  createRoot(document.getElementById('root')!).render(
    // <StrictMode>
    <App />
    // </StrictMode>,
  )
}

start()
