import { render } from '@testing-library/react'
import React from 'react'
import {Default as AuthFormHeader} from './AuthFormHeader.stories'

describe('AuthFormHeader', () => {
    it('to match snapshot', () => {
        const { asFragment } = render(<AuthFormHeader {...AuthFormHeader.args as any}/>)
        expect(asFragment()).toMatchSnapshot()

    })
})