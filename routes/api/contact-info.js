const { ContactInfos } = require("../../models");

module.exports = function (app) {
    // app.get("/api/contacs", function (req, res) {
    //     Post.findAll().then(result => {
    //         res.json(result);
    //     })
    // });
    
    app.post("/api/post", function (req, res) {
        ContactInfos.create(req.body).then(result => {
            res.json(result);
        })
    });
};
