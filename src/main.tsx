import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { IntlProvider } from 'react-intl'
import { messages } from './i18n/messages'

export type Locale = 'pt-BR' | 'en-US';

const usersLocale = navigator.language as Locale;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <IntlProvider locale={usersLocale} messages={messages[usersLocale]}>
      <App />
    </IntlProvider>
  </React.StrictMode>,
)
