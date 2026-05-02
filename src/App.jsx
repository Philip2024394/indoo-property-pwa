import { LanguageProvider } from '@/i18n'
import WebsiteApp from './website/WebsiteApp'

export default function App() {
  return (
    <LanguageProvider>
      <WebsiteApp />
    </LanguageProvider>
  )
}
