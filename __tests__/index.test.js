describe('diffusion unit tests', () => {
    it('returns correct result for dataset1', () => {
        const getOutput = require('../src/index')
        expect(getOutput('./data/dataset1')).toEqual([
            {
                Spain: 382,
                Portugal: 416,
                France: 1325 
            }, {
                Luxembourg: 0
            }, {
                Belgium: 2, 
                Netherlands: 2
            }
        ])
    })
})