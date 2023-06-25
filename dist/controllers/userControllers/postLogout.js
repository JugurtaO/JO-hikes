"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postLogout = void 0;
const postLogout = (req, res) => {
    if (!req.session.active_user_email) {
        return res.send("already logged out !");
    }
    console.log(">>>>>>>>>zemzemmzmzmzmmzmzm");
    //set user session flags to null  <--> session killed
    req.session.active_user_email = null;
    req.session.active_user_id = null;
    req.session.active_user_nickname = null;
    res.send("Successfuly logged out.");
};
exports.postLogout = postLogout;
