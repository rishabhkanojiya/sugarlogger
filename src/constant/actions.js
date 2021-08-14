import axios from "axios";

let actions = {};

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
