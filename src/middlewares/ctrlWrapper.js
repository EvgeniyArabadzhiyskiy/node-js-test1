const ctrlWrapper = (ctrl) => {
  return (req, res, next) => {
    ctrl(req, res).catch(err => {
      console.log(err, 'err');
       next(err)
    });
  };
};

module.exports = ctrlWrapper;
