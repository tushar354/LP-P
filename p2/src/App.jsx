import './App.css'
import Button from './components/Button/Button'
import ContactForm from './components/ContactForm/ContactForm'
import ContactHeader from './components/ContactHeader/ContactHeader'
import Navigation from './components/Navigation/Navigation'

function App() {
  return (
    <div>
      <Navigation />
      <ContactHeader />
      <ContactForm />
      {/* <Button /> */}
    </div>
  )
}

export default App
