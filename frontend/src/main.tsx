
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx' 
import { MantineProvider } from '@mantine/core'
import { StrictMode } from 'react'
import { AuthProvider } from './Context/AuthProvider.tsx'


createRoot(document.getElementById('root')!).render(
   <AuthProvider>
     <StrictMode>
    <App />
    </StrictMode>
    </AuthProvider>
)
