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
    res.render("addUser", {user: undefined});
  }

  exports.add_user =  async (req, res) => {
    try{
     const newUser = await UserModel.create({
       firstName: req.body.firstName,
       lastName: req.body.lastName
     })
     res.redirect("/users")
    } catch (err) {
      console.log(err)
    }
  }
  exports.delete_user = async (req, res) => {
    try{
      await UserModel.destroy({
        where: {
          id:req.params.id
        }
      });
      res.redirect("/users")
    } catch (error) {
      console.log(error)
    }
  }

  exports.show_edit_user = async (req, res) => {
    try{
      const user = await UserModel.findOne({
        where: { id : req.params.id}
      })
      res.render("addUser", {user})
    } catch(err) {
      res.send("An error occured...")
    }
  };

  exports.edit_user = async (req, res) => {
    try{
      await UserModel.update({
        firstName : req.body.firstName,
        lastName : req.body.lastName},
        {returning: true, where: {id: req.params.id},
      })
      res.redirect('/users');
    } catch(error) {
      res.send("An error occured!!!")
    }
  }