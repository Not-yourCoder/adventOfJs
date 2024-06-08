import { useEffect, useRef } from 'react'

import { Form, Label, TextField, Submit, FieldError } from '@redwoodjs/forms'
import { navigate, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/toast'

import { useAuth } from 'src/auth'
import HeaderWithRulers from 'src/components/HeaderWithRulers/HeaderWithRulers'

const ForgotPasswordPage = () => {
  const { isAuthenticated, forgotPassword } = useAuth()

  useEffect(() => {
    if (isAuthenticated) {
      navigate(routes.dashboard())
    }
  }, [isAuthenticated])

  const usernameRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    usernameRef?.current?.focus()
  }, [])

  const onSubmit = async (data: { username: string }) => {
    const response = await forgotPassword(data.username)

    if (response.error) {
      toast.error(response.error)
    } else {
      // The function `forgotPassword.handler` in api/src/functions/auth.js has
      // been invoked, let the user know how to get the link to reset their
      // password (sent in email, perhaps?)
      toast.success(
        'A link to reset your password was sent to ' + response.email
      )
      navigate(routes.login())
    }
  }

  return (
    <>
      <MetaTags title="Forgot Password" />

      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      <HeaderWithRulers
        className="mb-8 text-white"
        heading="Recover Password"
      />
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
            <TextField
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
              placeholder=""
            />

            <FieldError name="username" className="rw-field-error" />
          </div>

          <div className="">
            <Submit className="rw-button rw-button-blue">Submit</Submit>
          </div>
        </Form>
      </div>
    </>
  )
}

export default ForgotPasswordPage
