import { useRef } from 'react'
import { useEffect } from 'react'

import {
  Form,
  Label,
  PasswordField,
  FieldError,
  Submit,
  EmailField,
} from '@redwoodjs/forms'
import { Link, navigate, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/toast'

import { useAuth } from 'src/auth'
import HeaderWithRulers from 'src/components/HeaderWithRulers/HeaderWithRulers'

const SignupPage = () => {
  const { isAuthenticated, signUp } = useAuth()

  useEffect(() => {
    if (isAuthenticated) {
      navigate(routes.dashboard())
    }
  }, [isAuthenticated])

  // focus on username box on page load
  const usernameRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    usernameRef.current?.focus()
  }, [])

  const onSubmit = async (data: Record<string, string>) => {
    const response = await signUp({
      username: data.username,
      password: data.password,
    })

    if (response.message) {
      toast(response.message)
    } else if (response.error) {
      toast.error(response.error)
    } else {
      // user is signed in automatically
      toast.success('Welcome!')
    }
  }

  return (
    <>
      <MetaTags title="Signup" />

      <HeaderWithRulers className={'mb-6 text-white'} heading="Sign up" />
      <div className="mx-auto max-w-[660px]">
        <Form onSubmit={onSubmit} className="rw-form-wrapper">
          <div className="field">
            <Label
              name="username"
              className="rw-label"
              errorClassName="rw-label rw-label-error"
            >
              Username
            </Label>
            <EmailField
              placeholder=""
              name="username"
              className="rw-input"
              errorClassName="rw-input rw-input-error"
              ref={usernameRef}
              validation={{
                required: {
                  value: true,
                  message: 'Username is required',
                },
              }}
            />
            <FieldError name="username" className="rw-field-error" />
          </div>
          <div className="field">
            <Label
              name="password"
              className="rw-label"
              errorClassName="rw-label rw-label-error"
            >
              Password
            </Label>
            <PasswordField
              name="password"
              className="rw-input"
              errorClassName="rw-input rw-input-error"
              autoComplete="current-password"
              validation={{
                required: {
                  value: true,
                  message: 'Password is required',
                },
              }}
            />
            <FieldError name="password" className="rw-field-error" />
          </div>
          <div className="rw-button-group">
            <Submit className="rw-button rw-button-blue">Sign Up</Submit>
          </div>
        </Form>

        <div className="mt-4 text-center text-lg text-white">
          <span>Already have an account?</span>{' '}
          <Link to={routes.login()} className="rw-link">
            Log in!
          </Link>
        </div>
      </div>
    </>
  )
}

export default SignupPage
