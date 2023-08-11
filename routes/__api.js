const express = require("express");
const router = express.Router();
const frontend_secret_key = process.env.frontend_secret_key;
const CONFIG = require("../config.json");
const api_domain = CONFIG.apiSiteLink;

router.get("/register", async (req, res) => {
  try {
    const email = req.query.email;
    const password = req.query.password;
    if (email == undefined || password == undefined) {
      res.json({ error: 1 });
      return;
    }
    const api_res = await fetch(
      `${api_domain}/${frontend_secret_key}/register/?email=${email}&password=${password}`
    );
    const api_data = await api_res.json();

    if (!api_res.ok) {
      console.log(api_data.description);
      res.json({ error: 1 });
      return;
    }

    res.json(api_data);
  } catch (error) {
    console.log(error);
    res.json({ error: 1 });
    return;
  }
});

module.exports = router;
