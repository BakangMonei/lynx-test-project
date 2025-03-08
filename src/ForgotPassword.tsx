import { useState } from '@lynx-js/react'

interface ForgotPasswordProps {
  onBackToLogin: () => void
  onResetPassword: (email: string) => void
}

export function ForgotPassword({ onBackToLogin, onResetPassword }: ForgotPasswordProps) {
  const [email, setEmail] = useState('')

  const handleSubmit = () => {
    if (email) {
      onResetPassword(email)
    } else {
      console.log('Please enter your email')
    }
  }

  return (
    <view className="ForgotPasswordScreen">
      <view className="ForgotPasswordForm">
        <text className="FormTitle">Forgot Password</text>
        <text className="FormDescription">
          Enter your email address and we'll send you instructions to reset your password.
        </text>
        
        <view className="FormField">
          <text className="FieldLabel">Email</text>
          <input 
            className="FieldInput" 
            type="text" 
            value={email} 
            onInput={(e) => setEmail(e.target.value)} 
          />
        </view>
        
        <view className="FormActions">
          <button className="PrimaryButton" bindtap={handleSubmit}>
            <text>Submit</text>
          </button>
          
          <button className="SecondaryButton" bindtap={onBackToLogin}>
            <text>Back to Login</text>
          </button>
        </view>
      </view>
    </view>
  )
}