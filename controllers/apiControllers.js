const axios = require('axios');

module.exports = {
  search: (req, res) => {
    const query = req.query.q;
    const url = `https://api.edamam.com/search?q=${query}&app_key=${process.env.edamam_app_key}&app_id=${process.env.edamam_app_id}`;
    axios.get(url).then((response) => {
      console.log(response.data.hits);
      res.json(response.data.hits);
    });
  },
};
