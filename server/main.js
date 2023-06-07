import { Meteor } from "meteor/meteor";
const { request } = require('urllib');


Meteor.startup(async () => {
  const { data, res } = await request("http://cnodejs.org/");
  console.log(
    "status: %s, body size: %d, headers: %j",
    res.status,
    data.length,
    res.headers
  );

});
