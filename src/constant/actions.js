import axios from "axios";
import config from "./config";

let actions = {};

actions.getImage = (id) => {
  return config.reactionImages.filter((a) => a.id == id)[0];
};

actions.groupBy = (xs, key) => {
  return xs.reduce(function (rv, x) {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
};

export const getData = (params, cb, errCB) => {
  axios(params)
    .then((result) => {
      if (cb) {
        cb(result);
      }
    })
    .catch((err) => {
      if (errCB) {
        errCB(err);
      }
    });
};

export default actions;
