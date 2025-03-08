import { useState } from '@lynx-js/react'

interface RegisterScreenProps {
  onBackToLogin: () => void
  onRegister: (data: RegisterData) => void
}

interface RegisterData {
  username: string
  email: string
  password: string
}

export function RegisterScreen({ onBackToLogin, onRegister }: RegisterScreenProps) {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleRegister = () => {
    // Simple validation
    if (username && email && password && password === confirmPassword) {
      onRegister({ username, email, password })
    } else if (password !== confirmPassword) {
      console.log('Passwords do not match')
    } else {
      console.log('Please fill all fields')
    }
  }

  return (
    <view className="RegisterScreen">
      <view className="RegisterForm">
        <text className="FormTitle">Create Account</text>
        
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
          <text className="FieldLabel">Email</text>
          <input 
            className="FieldInput" 
            type="text" 
            value={email} 
            onInput={(e) => setEmail(e.target.value)} 
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
        
        <view className="FormField">
          <text className="FieldLabel">Confirm Password</text>
          <input 
            className="FieldInput" 
            type="password" 
            value={confirmPassword} 
            onInput={(e) => setConfirmPassword(e.target.value)} 
          />
        </view>
        
        <view className="FormActions">
          <button className="PrimaryButton" bindtap={handleRegister}>
            <text>Register</text>
          </button>
          
          <button className="SecondaryButton" bindtap={onBackToLogin}>
            <text>Back to Login</text>
          </button>
        </view>
      </view>
    </view>
  )
}