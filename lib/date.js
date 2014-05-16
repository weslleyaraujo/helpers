/**
 * Helpers for Date
 *
 * @class Date
 *
 */

/**
 * Add hours to Date
 *
 * @method addHours
 * @param {Number} h How much hours to add
 * @return {Object} The Date instance
 */
Date.prototype.addHours = function (h) {
  this.setHours(this.getHours()+h);
  return this;
};

/**
 * Remove hours to date
 *
 * @method removeHours
 * @param {Number} h How much hours to remove
 * @return {Object} The Date instance
 */
Date.prototype.removeHours = function (h) {
  this.setHours(this.getHours()-h);
  return this;
};

/**
 * Add minutes to date
 *
 * @method addMinutes
 * @param {Number} m How much minutes to add
 * @return {Object} The Date instance
 */
Date.prototype.addMinutes = function (m) {
  this.setMinutes(this.getMinutes()+m);
  return this;
};

/**
 * Add minutes to date
 *
 * @method addMinutes
 * @param {Number} m How much minutes to add
 * @return {Object} The Date instance
 */
Date.prototype.removeMinutes = function (m) {
  this.setMinutes(this.getMinutes()-m);
  return this;
};
