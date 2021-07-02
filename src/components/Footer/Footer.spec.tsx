import { render } from '@testing-library/react'
import React from 'react'
import {Footer} from './Footer'

describe('Footer', () => {
    it('to match snapshot', () => {
        const { asFragment } = render(<Footer serviceName="shifter"/>)
        expect(asFragment()).toMatchSnapshot()

    })
})