"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.allReviews = void 0;
const myModels = __importStar(require("../../models/index"));
const allReviews = (req, res) => {
    const { trail_id } = req.params;
    //no need to await the operation
    const Reviews = myModels.Review.findAll({ where: { trail_id: trail_id } });
    Reviews.then(allReviews => {
        if (!allReviews.length) {
            req.flash("danger", `No review was found, login and let's create one.`);
            return res.redirect(`/trails/${trail_id}/reviews`);
        }
        return res.json(allReviews);
    }).catch(err => {
        return res.send("error payload set to" + err);
    });
};
exports.allReviews = allReviews;
