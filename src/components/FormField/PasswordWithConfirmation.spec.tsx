import { render } from '@testing-library/react'
import React from 'react'
import {Default as PasswordWithConfirmation} from './PasswordWithConfirmation.stories'

describe('PasswordWithConfirmation', () => {
    it('to match snapshot', () => {
        const { asFragment } = render(<PasswordWithConfirmation {...PasswordWithConfirmation.args as any}/>)
        expect(asFragment()).toMatchSnapshot()

    })
})