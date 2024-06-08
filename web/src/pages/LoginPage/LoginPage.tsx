import { useRef } from 'react'
import { useEffect } from 'react'

import { Form, Label, Submit, FieldError, EmailField } from '@redwoodjs/forms'
import { Link, navigate, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/toast'

import { useAuth } from 'src/auth'
import HeaderWithRulers from 'src/components/HeaderWithRulers/HeaderWithRulers'
import ShowHidePassword from 'src/components/ShowHidePassword/ShowHidePassword'

const LoginPage = () => {
  const { isAuthenticated, logIn } = useAuth()

  useEffect(() => {
    if (isAuthenticated) {
      navigate(routes.dashboard())
    }
  }, [isAuthenticated])

  const usernameRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    usernameRef.current?.focus()
  }, [])

  const onSubmit = async (data: Record<string, string>) => {
    const response = await logIn({
      username: data.username,
      password: data.password,
    })

    if (response.message) {
      toast(response.message)
    } else if (response.error) {
      toast.error(response.error)
    } else {
      toast.success('Welcome back!')
    }
  }

  return (
    <>
      <div className="mx-auto mt-20 max-w-[660px]">
        <MetaTags title="Login" />
        <HeaderWithRulers heading="login" className="mb-6 text-white" />
        <Form onSubmit={onSubmit} className="">
          <div className="field">
            <Label name="username" className="rw-label" errorClassName="error">
              Username
            </Label>
            <EmailField
              name="username"
              errorClassName="rw-input rw-input-error"
              ref={usernameRef}
              validation={{
                required: {
                  value: true,
                  message: 'Username is required',
                },
              }}
              placeholder=""
            />

            <FieldError
              name="username"
              className="error-message mt-2 text-lg text-red-600"
            />
          </div>
          <div className="field">
            <ShowHidePassword
              label="Password"
              name="password"
              errorClassName="rw-input rw-input-error"
              autoComplete="current-password"
              validation={{
                required: {
                  value: true,
                  message: 'Password is required',
                },
              }}
              placeholder=""
            />
            <div className="mt-2 flex justify-between text-right text-lg text-white">
              <FieldError
                name="password"
                className="error-message text-red-700"
              />
              <Link to={routes.forgotPassword()} className="hover:underline">
                Forgot Password?
              </Link>
            </div>
          </div>

          <Submit className="">Login</Submit>
        </Form>
        <div className="mt-2 text-right text-lg text-white">
          <span>Don&apos;t have an account?</span>{' '}
          <Link to={routes.signup()}>Sign up!</Link>
        </div>
      </div>
    </>
  )
}

export default LoginPage
