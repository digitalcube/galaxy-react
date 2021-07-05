import { render } from '@testing-library/react'
import React from 'react'
import {Default as FormField} from './FormField.stories'

describe('FormField', () => {
    it('to match snapshot', () => {
        const { asFragment } = render(<FormField {...FormField.args as any}/>)
        expect(asFragment()).toMatchSnapshot()

    })
})