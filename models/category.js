module.exports = function(sequelize, DataTypes) {
  var Category = sequelize.define('Category', {
    name: {
      type: DataTypes.STRING,
      primaryKey: true,
      notEmpty: true
    }
  });

  return Category;
};