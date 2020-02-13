'use strict';

const Gatherer = require('lighthouse').Gatherer;

class TimeToFirstRequest extends Gatherer {
  afterPass(options) {
    const driver = options.driver;

    return driver.evaluateAsync('window.firstRequestTime').then( firstRequestTime => {
      if (!firstRequestTime) {
        throw new Error('Unable to find first request metrics in page');
      }

      return firstRequestTime;
    });
  }
}

module.exports = TimeToFirstRequest;