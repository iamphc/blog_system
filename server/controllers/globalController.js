exports.global_homepage = (req, res, next) => {
  res.send('global homepage');
}

exports.global_register = (req, res, next) => {
  req.body = {
    a:1,
    b:2
  }
  res.send('global register');
}

exports.global_login = (req, res, next) => {
  res.send('global user login');
}

exports.global_get_menu_items = (req, res, next) => {
  res.send('global top-menu/side-menu');
}