'use strict';

const Audit = require('lighthouse').Audit;

const MAX_FIRST_REQUEST_TIME = 3000;

class FirstRequestAudit extends Audit {

  static get meta() {
    return {
      id: 'first-request-audit',
      title: 'First request audit',
      category: 'MyPerformance',
      name: 'first-request-audit',
      description: 'First request to API done',
      failureDescription: 'First request to API is slow',
      helpText: 'Used to measure time the first request to the API',
      requiredArtifacts: ['TimeToFirstRequest']
    };
  }

  static audit(artifacts) {
    const time = artifacts.TimeToFirstRequest;

    const belowThreshold = time <= MAX_FIRST_REQUEST_TIME;

    return {
      rawValue: time,
      score: Number(belowThreshold)
    };
  }
}

module.exports = FirstRequestAudit;