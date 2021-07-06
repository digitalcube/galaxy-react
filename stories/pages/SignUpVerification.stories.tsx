import React, { FC, useState, useEffect, } from "react";
import { Meta, Story } from '@storybook/react';
import {
    AuthFormHeader, Button, FormAlert,
    Footer,  Layouts, ImageSendEmail, 
    DigitCodeInput,
} from "../../src";
  
type MockSignUpVerificationPageProps = {
    status: '' | 'failure'
}
const MockSignUpVerificationPage: FC<MockSignUpVerificationPageProps> = ({status}) => {
    const [currentStatus, setCurrentStatus] = useState(status)
    useEffect(() => {
        setCurrentStatus(status)
    }, [status, setCurrentStatus])

    const [canSubmit, setCanSubmit] = useState(false)
    const [codes, setCodes] = useState<string[]>([...Array(6)].map(() => ""))
    useEffect(() => {
        if (codes.every(num => num !== "")) {
            setCanSubmit(true)
        } else {
            setCanSubmit(false)
        }
    }, [codes, setCanSubmit])
    return (
        <Layouts variant="signup" footer={<Footer serviceName="Shifter" />}>
		<form className="signup px-4 py-4 rounded" noValidate onSubmit={e => {
            e.preventDefault()
            alert('Code is ' + codes.join(''))
        }}>
            <AuthFormHeader
                logo={<ImageSendEmail width="171" height="169" alt="" />}
                title="Check your email"
                variant="signup"
            >
                <div className="mt-4 pb-2 text-center send-email">We’ve sent a verification email to <b>username@email.com</b>.</div>
                <div className="mt-4 pb-2 font-weight-bold text-center enter-code">Enter the code from the email to verify your account</div>
            </AuthFormHeader>
            <FormAlert errorMessage={currentStatus === 'failure' ? "We found some errors with your login info. Please correct these issues to continue" : undefined} />
            <DigitCodeInput
                loading={false}
                onChange={setCodes}
                values={codes}
                errorMessage={currentStatus === 'failure' ? 'code is incorrect': undefined}
            >
                <small id="resend-code" className="mt-2 form-text text-muted"><a href="#" target="_blank">Resend email</a></small>
            </DigitCodeInput>
			<Button type="submit" block disabled={!canSubmit}>Verify</Button>
		</form>
        </Layouts>    
    )
}


const meta: Meta = {
  title: 'Mockup/Pages/SignUpVerification',
  component: MockSignUpVerificationPage,
  argTypes: {
      status: {
        options: ['default', 'failure'],
        control: { type: 'radio' }
      }
  },
  parameters: {
    controls: {
        expanded: true
    },
  },
};

export default meta;

const Template: Story<MockSignUpVerificationPageProps> = args => <MockSignUpVerificationPage {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});
Default.args = {
    status: '',
}

export const Failure = Template.bind({});
Failure.args = {
    status: 'failure',
}