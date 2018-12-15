describe('diffusion unit tests', () => {
    it('returns correct result for dataset2', () => {
        const getOutput = require('../src/index')
        expect(getOutput('./data/dataset2')).toEqual([
            {
                Spain: 382,
                Portugal: 416,
                France: 1325 
            }
        ])
    })
})