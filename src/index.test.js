var persephonySDK = require('./index')
var persy = persephonySDK('AC79df825d6690cc51111673d64aed6ed121dd39e1', '865442d5b4188e373e9a4b0d852c1bfe96fbd9d9')

describe('index', function () {
  describe('percl', function () {
    it('builds a valid percl script', function () {
      expect(persy.percl.build(persy.percl.say('Hello World', {language: persy.enums.language.ENGLISH_US}))).toEqual([{Say: {text: 'Hello World', language: 'en-US'}}])
    })
  })
})
