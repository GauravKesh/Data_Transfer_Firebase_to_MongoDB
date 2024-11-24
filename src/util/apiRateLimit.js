const {rateLimit} = require("express-rate-limit");

const limiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  limit: 10, 
  standardHeaders: "draft-7", 
  legacyHeaders: false,
});

module.exports = {limiter};