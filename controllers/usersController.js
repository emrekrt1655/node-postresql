const UserModel = require("../models/User")
exports.get_users = async (req, res, next) => {
  try {
    const userList = await UserModel.findAll()
    res.render('users', { userList });
  } catch (error) {
    res.send('An error occured')
  }
  
  };

  exports.show_add_user_form = (req, res) => {
    res.render("addUser");
  }

  exports.add_user =  async (req, res) => {
    try{
     const newUser = await UserModel.create({
       firstName: req.firstName,
       lastName: req.lastName
     })
     res.redirect("/users")
    } catch (err) {
      console.log(err)
    }
  }