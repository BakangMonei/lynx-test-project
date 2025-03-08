import { useEffect } from '@lynx-js/react'
import lynxLogo from './assets/lynx-logo.png'

interface SplashScreenProps {
  onFinished: () => void
}

export function SplashScreen({ onFinished }: SplashScreenProps) {
  useEffect(() => {
    // Auto-navigate after 2 seconds
    const timer = setTimeout(() => {
      onFinished()
    }, 2000)
    
    return () => clearTimeout(timer)
  }, [onFinished])

  return (
    <view className="SplashScreen">
      <view className="SplashContent">
        <image src={lynxLogo} className="SplashLogo" />
        <text className="SplashTitle">Welcome</text>
        <text className="SplashSubtitle">Your Lynx App</text>
      </view>
    </view>
  )
}