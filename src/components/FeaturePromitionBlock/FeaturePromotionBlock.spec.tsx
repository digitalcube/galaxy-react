import { render } from '@testing-library/react'
import React from 'react'
import {Default as FeaturePromotionBlock} from './FeaturePromotionBlock.stories'

describe('FeaturePromotionBlock', () => {
    it('to match snapshot', () => {
        const { asFragment } = render(<FeaturePromotionBlock {...FeaturePromotionBlock.args as any}/>)
        expect(asFragment()).toMatchSnapshot()

    })
})