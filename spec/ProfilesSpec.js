var profile = require('../app');

describe('Profiles', function() {
  describe('printMessage', function() {
    it('prints username, badge count and points', function() {
      expect(profile.printMessage("andrew_stelmach", 992, 2600000)).toEqual("andrew_stelmach has 992 total badge(s) and 2600000 points in Javascript");
    });
  });
});