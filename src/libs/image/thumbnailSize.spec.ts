import {
    getThumbnailHeight
} from './thumbnailSize'

describe('libs/image/thumbnailSize', () => {
    describe('getThumbnailHeight()', () => {
        it.each([
            [167, 111],
            [200, 133],
            [500, 333],
            [1000, 665]
        ])('Given width is %p, should return $p', (width, expectedHeight) => {
            expect(getThumbnailHeight(width)).toEqual(expectedHeight)
        })
    })
})