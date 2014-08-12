'use strict';
var util = require('util');
var yeoman = require('yeoman-generator');
var _ = require('yeoman-generator/node_modules/lodash')

String.prototype.splice = function( idx, rem, s ) {
    return (this.slice(0,idx) + s + this.slice(idx + Math.abs(rem)));
};

var EntityGenerator = module.exports = function EntityGenerator(args, options, config) {
  // By calling `NamedBase` here, we get the argument to the subgenerator call
  // as `this.name`.
  yeoman.generators.NamedBase.apply(this, arguments);

  console.log('You called the entity subgenerator with the argument ' + this.name + '.');
  this.entityName = this.name;
  this.formalEntityName = this.name.charAt(0).toUpperCase() + this.name.slice(1);
};

util.inherits(EntityGenerator, yeoman.generators.NamedBase);


EntityGenerator.prototype.files = function files() {

	var sluggy = _.slugify(this.name);

    console.log('sluggy: ' + sluggy);

  this.template('app_routes.js', 'server/routes/' + sluggy + 's.js');
  this.template('app_controller.js', 'server/controllers/' + sluggy + 's.js');
  this.template('app_model.js', 'server/models/' + sluggy + 's.js');
  //this.template('public_js_module.js', 'public/' + sluggy + 's/' + sluggy + 's.js');
  this.template('public_js_controllers.js', 'public/controllers/' + sluggy + 's.js');
  this.template('public_js_routes.js', 'public/routes/' + sluggy + 's.js');
  this.template('public_js_services.js', 'public/services/' + sluggy + 's.js');
  this.template('public_views_create.html', 'public/views/' + sluggy + 's/create.html');
  this.template('public_views_edit.html', 'public/views/' + sluggy + 's/edit.html');
  this.template('public_views_list.html', 'public/views/' + sluggy + 's/list.html');
  this.template('public_views_view.html', 'public/views/' + sluggy + 's/view.html');

};
