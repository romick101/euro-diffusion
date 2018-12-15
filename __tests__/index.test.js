describe('diffusion unit tests', () => {
    it('returns correct result for dataset1', () => {
        const getOutput = require('../src/index')
        return(getOutput('./data/dataset1')).then(res => {
            expect(res).toEqual([
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
})