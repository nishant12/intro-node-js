const data = require('./data');

let getUserById = (id, cb) => {
  // simulate API call
  setTimeout(() => {
    const user = data.users.find(user => user.id === id)
    cb(user)
  }, 150)
}

let getPostsForUser = (userId, cb) => {
  // simulate API call
  setTimeout(() => {
    const posts = data.posts.filter(post => post.createdBy === userId)
    cb(posts)
  }, 150)
}

module.exports = { getUserById, getPostsForUser };