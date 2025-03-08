import { useCallback, useState } from '@lynx-js/react'
import './App.css'

// Import components
import { SplashScreen } from './SplashScreen.jsx'
import { LoginScreen } from './LoginScreen.jsx'
import { ForgotPassword } from './ForgotPassword.jsx'
import { RegisterScreen } from './RegisterScreen.jsx'

// Screen types
type Screen = 'splash' | 'login' | 'register' | 'forgotPassword' | 'main'

export function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('splash')
  
  // Navigation handlers
  const navigateToLogin = useCallback(() => setCurrentScreen('login'), [])
  const navigateToRegister = useCallback(() => setCurrentScreen('register'), [])
  const navigateToForgotPassword = useCallback(() => setCurrentScreen('forgotPassword'), [])
  const navigateToMain = useCallback(() => setCurrentScreen('main'), [])
  
  // Auth handlers
  const handleLogin = useCallback(() => {
    console.log('Logging in...')
    navigateToMain()
  }, [navigateToMain])
  
  const handleRegister = useCallback((data) => {
    console.log('Registering user:', data)
    navigateToLogin()
  }, [navigateToLogin])
  
  const handleResetPassword = useCallback((email) => {
    console.log('Password reset requested for:', email)
    // In a real app, this would send a reset email
    alert(`Password reset link sent to ${email}`)
    navigateToLogin()
  }, [navigateToLogin])

  // Render the appropriate screen
  const renderScreen = () => {
    switch (currentScreen) {
      case 'splash':
        return <SplashScreen onFinished={navigateToLogin} />
      case 'login':
        return (
          <LoginScreen 
            onLogin={handleLogin}
            onRegister={navigateToRegister}
            onForgotPassword={navigateToForgotPassword}
          />
        )
      case 'register':
        return (
          <RegisterScreen 
            onBackToLogin={navigateToLogin}
            onRegister={handleRegister}
          />
        )
      case 'forgotPassword':
        return (
          <ForgotPassword 
            onBackToLogin={navigateToLogin}
            onResetPassword={handleResetPassword}
          />
        )
      case 'main':
        return <MainContent />
      default:
        return <text>Unknown screen</text>
    }
  }

  return (
    <view>
      <view className='Background' />
      <view className='App'>
        {renderScreen()}
      </view>
    </view>
  )
}

// Placeholder for the main content after login
function MainContent() {
  return (
    <view className="MainContent">
      <text className="WelcomeText">Welcome to the App!</text>
      <text className="SuccessText">You have successfully logged in.</text>
    </view>
  )
}