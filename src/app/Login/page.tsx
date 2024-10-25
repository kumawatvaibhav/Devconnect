'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { GithubIcon, Mail } from 'lucide-react'

export default function Component() {
  const [isLogin, setIsLogin] = useState(true)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (isLogin) {
      console.log('Login:', email, password)
    } else {
      console.log('Signup:', name, email, password)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-4">
      <Card className="w-full max-w-md shadow-lg overflow-hidden">
        <div className="bg-gradient-to-br from-gray-900 to-gray-700 p-6 flex justify-center">
          <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-QRrkXqTyeVW8GYLoIAP4NjHFmXY5ie.png" alt="Dev-Connect Logo" className="w-20 h-20" />
        </div>
        <div className="bg-gradient-to-br from-gray-100 to-gray-300 p-6">
          <div className="flex justify-center mb-4">
            <Button
              variant="outline"
              className={`mr-2 ${isLogin ? 'bg-white' : 'bg-gray-200'} text-black`}
              onClick={() => setIsLogin(true)}
            >
              Login
            </Button>
            <Button
              variant="outline"
              className={`ml-2 ${!isLogin ? 'bg-white' : 'bg-gray-200'} text-black`}
              onClick={() => setIsLogin(false)}
            >
              Sign up
            </Button>
          </div>
          <form onSubmit={handleSubmit}>
            <CardHeader className="p-0 mb-4">
              <CardTitle className="text-2xl font-bold text-gray-800">
                {isLogin ? 'Login to Dev-Connect' : 'Create an account'}
              </CardTitle>
              <CardDescription className="text-gray-600">
                {isLogin ? 'Enter your credentials to access your account' : 'Enter your details to create your account'}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 p-0">
              {!isLogin && (
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-gray-700">Name</Label>
                  <Input 
                    id="name" 
                    placeholder="Vaibhav"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required={!isLogin}
                    className="bg-white"
                  />
                </div>
              )}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-700">Email</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="dev-connect@example.com" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required 
                  className="bg-white"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password" className="text-gray-700">Password</Label>
                <Input 
                  id="password" 
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required 
                  className="bg-white"
                />
              </div>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4 p-0 mt-6">
              <Button type="submit" className="w-full bg-gray-800 hover:bg-gray-700">
                {isLogin ? 'Login' : 'Sign up'}
              </Button>
              {isLogin && (
                <div className="flex flex-col space-y-2 w-full">
                  <Button variant="outline" className="w-full bg-white text-gray-500">
                    <Mail className="mr-2 h-4 w-4" /> Login with Gmail
                  </Button>
                  <Button variant="outline" className="w-full text-black">
                    <GithubIcon className="mr-2 h-4 w-4" /> Login with GitHub
                  </Button>
                </div>
              )}
            </CardFooter>
          </form>
        </div>
      </Card>
    </div>
  )
}