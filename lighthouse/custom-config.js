'use strict';

module.exports = {

  extends: 'lighthouse:default',

  passes: [{
    passName: 'defaultPass',
    gatherers: [
      'card-gatherer',
      'first-request-gatherer'
    ]
  }],

  audits: [
    'card-audit',
    'first-request-audit'
  ],

  categories: {
    ratp_pwa: {
      name: 'Ratp pwa metrics',
      description: 'Metrics for the ratp timetable site',
      auditRefs: [
        { id: 'card-audit', weight: 1 },
        { id: 'first-request-audit', weight: 1 }
      ]
    }
  }
};