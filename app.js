var Profile = function() {
  Profile.prototype.printMessage = function(username, badgeCount, points) {
    return username + " has " + badgeCount + " total badge(s) " + "and " + points + " points in Javascript";
  };
};

module.exports = Profile;