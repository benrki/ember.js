module.exports = {
  'container':                  {trees: null,  requirements: []},
  'ember-metal':                {trees: null,  vendorRequirements: ['backburner']},
  'ember-metal-views':          {trees: null,  vendorRequirements: ['morph']},
  'ember-debug':                {trees: null,  requirements: ['ember-metal'], skipTests: true},
  'ember-runtime':              {trees: null,  vendorRequirements: ['rsvp'], requirements: ['container', 'ember-metal']},
  'ember-views':                {trees: null,  requirements: ['ember-runtime', 'ember-metal-views']},
  'ember-extension-support':    {trees: null,  requirements: ['ember-application']},
  'ember-testing':              {trees: null,  requirements: ['ember-application', 'ember-routing']},
  'ember-handlebars-compiler':  {trees: null,  requirements: ['ember-views']},
  'ember-handlebars':           {trees: null,  vendorRequirements: ['metamorph'], requirements: ['ember-views', 'ember-handlebars-compiler']},
  'ember-htmlbars':             {trees: null,  vendorRequirements: ['htmlbars', 'handlebars', 'simple-html-tokenizer', 'htmlbars-compiler', 'bound-templates'], requirements: ['ember-metal-views']},
  'ember-routing':              {trees: null,  vendorRequirements: ['router', 'route-recognizer'],
                                               requirements: ['ember-runtime', 'ember-views']},
  'ember-routing-handlebars':   {trees: null,  requirements: ['ember-routing', 'ember-handlebars']},
  'ember-application':          {trees: null,  requirements: ['ember-routing']},
  'ember':                      {trees: null,  requirements: ['ember-application']}
};