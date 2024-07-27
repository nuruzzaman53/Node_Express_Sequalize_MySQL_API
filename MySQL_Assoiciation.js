const { Sequelize, sequelize } = require("./databaseModel")

class User extends Model {};

User.init({
    name:Sequelize.STRING
},{
    sequelize,
    modelName:'users'
})

// create a project class//

class Project extends Model {};

Project.init({
    name: Sequelize.TEXT
},{
    sequelize, modelName:'projects'
})

User.hasOne(Project)