import { Request, Response } from "express";
import * as myModels from "../../models/index";

export const viewTrail = (req: Request, res: Response) => {

    const { trail_id } = req.params;

    const trail = myModels.Trail.findOne({ where: { trail_id: trail_id } });

    trail.then(Trail => {
        if (Trail === null){
            req.flash("danger",`No trail was found !`);
            return res.redirect("/trails");
            
        }
       

        
            
        // load all trail reviews & their author| no need to await the operation
        const Reviews = myModels.Review.findAll({include:{model:myModels.User},where: { trail_id: trail_id }, limit: 20 });


        Reviews.then(allReviews => {
            return res.render("viewTrail", { Trail, allReviews });
        })


    }).catch(err => {
        return res.send("error payload set to " + err);
    });





};