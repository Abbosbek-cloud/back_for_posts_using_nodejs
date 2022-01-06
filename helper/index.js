exports.createPostValidator = (req, res, next) => {
    //title
    req.check('title', 'Write a title ...').notEmpty();
    req.check('title', 'Write enough post between legth 4 and 150!!!').isLength({
        min: 4,
        max: 150
    })
    //body
    req.check('body', 'Write a body ...').notEmpty();
    req.check('body', 'Write enough post between legth 4 and 1500!!!').isLength({
        min: 4,
        max: 1500
    })
    //check for errors
    const errors = req.validationErrors()
    //returns first error if error occurs
    if(errors) {
        const firstError = errors.map((error)=> error.msg)[0]
        return res.status(400).json({error: firstError})
    }
    //proceed to next middleware
    next();
}

