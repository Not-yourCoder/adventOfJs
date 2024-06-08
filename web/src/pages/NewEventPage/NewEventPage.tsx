import { DateField, Form, Label, TextField } from '@redwoodjs/forms'
import { navigate, routes } from '@redwoodjs/router'
import { MetaTags, useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/dist/toast'

import Checkbox from 'src/components/Checkbox/Checkbox'
import HeaderWithRulers from 'src/components/HeaderWithRulers/HeaderWithRulers'

const CREATE_EVENT_MUTATION = gql`
  mutation createEventMutation(
    $name: String!
    $date: DateTime!
    $sendReminder: Boolean!
  ) {
    createEvent(
      input: { name: $name, date: $date, sendReminder: $sendReminder }
    ) {
      id
      name
      date
      createdAt
    }
  }
`
const NewEventPage = () => {
  const [createEvent, { loading }] = useMutation(CREATE_EVENT_MUTATION, {
    onCompleted: () => {
      toast.success('Event Created')
      navigate(routes.groupInvite())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })
  const handleSubmit = (data) => {
    console.log({ data })
    createEvent({
      variables: {
        name: data.eventName,
        date: data.eventDate,
        sendReminder: data.eventReminder,
      },
    })
  }
  if (loading) {
    return <div className="text-center text-3xl text-white">Loading...</div>
  }

  return (
    <>
      <MetaTags title="Set up your event" />
      <HeaderWithRulers
        heading="Set up your event"
        className="mb-6 text-white"
      />
      <div className="auth-form mx-auto max-w-[660px]">
        <Form onSubmit={handleSubmit}>
          <div className="field">
            <Label name="eventName">Event Name</Label>
            <TextField name="eventName" placeholder="" />
          </div>
          <div className="field">
            <Label name="eventDate">Event Date</Label>
            <DateField name="eventDate" placeholder="" />
          </div>
          <div className="field">
            <Checkbox
              name="eventReminder"
              label="Send out a reminder for the event"
            />
          </div>
          <button type="submit">Submit</button>
        </Form>
      </div>
    </>
  )
}

export default NewEventPage
