import { useCallback, useEffect, useState } from '@lynx-js/react'
interface LoginScreenProps {
  onLogin: () => void
  onRegister: () => void
  onForgotPassword: () => void
}

export function LoginScreen({ onLogin, onRegister, onForgotPassword }: LoginScreenProps) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = () => {
    // Simple validation
    if (username && password) {
      onLogin()
    } else {
      console.log('Please enter both username and password')
    }
  }

  return (
    <view className="LoginScreen">
      <view className="LoginForm">
        <text className="FormTitle">Login</text>
        
        <view className="FormField">
          <text className="FieldLabel">Username</text>
          <input 
            className="FieldInput" 
            type="text" 
            value={username} 
            onInput={(e) => setUsername(e.target.value)} 
          />
        </view>
        
        <view className="FormField">
          <text className="FieldLabel">Password</text>
          <input 
            className="FieldInput" 
            type="password" 
            value={password} 
            onInput={(e) => setPassword(e.target.value)} 
          />
        </view>
        
        <view className="FormActions">
          <button className="PrimaryButton" bindtap={handleLogin}>
            <text>Login</text>
          </button>
          
          <view className="FormLinks">
            <text className="LinkText" bindtap={onForgotPassword}>Forgot Password?</text>
            <text className="LinkText" bindtap={onRegister}>Register New Account</text>
          </view>
        </view>
      </view>
    </view>
  )
}