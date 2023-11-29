const path = require('path');
function getPosts(req, res) {
    res.sendFile(path.join(__dirname, '..', 'public', 'images', 'image1.jpg'));
    // res.send('<div><h1>Post Title</h1><p>This is a post</p></div>');
}

module.exports = {
    getPosts
}