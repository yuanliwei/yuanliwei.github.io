const ClassModel = require('./ClassModel');

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
