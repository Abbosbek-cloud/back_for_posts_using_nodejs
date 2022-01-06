const Post = require('../models/post')

exports.getPosts = (req, res) => {
    
    const posts = Post.find()
        
    .select('id title body')
        
        .then((posts) => {

            res.json({
                posts: posts
            })
        
        })

        .catch((err) => {

            console.log(err);
        
        })
}

exports.createPost = (req, res) => {

    const post = new Post(req.body)
    
    post.save().then((result) => {
        res.json({
            post: result
        })
    })

    // to check either error handler worked or not

    console.log('Creating a new post: ', post)
}
