//var ClassModel, NewModel;

var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

//ClassModel = require('./class-model');

var NewModel = (function(superClass) {
  extend(NewModel, superClass);

  function NewModel() {
    return NewModel.__super__.constructor.apply(this, arguments);
  }

  NewModel.prototype.insertOtherCode = function(builder) {
    console.log("implament in sub class");
    return builder.push("helllllllllllllllllllllllo");
  };

  return NewModel;

})(ClassModel);
