let { getPostsForUser, getUserById } = require('./api');

let showPostsForCurrentUser = (userId, cb) => {
  getPostsForUser(userId, data => {
    const postTemplates = data.map(post => {
      return `
      <div class="post">
        ${post.title}
        ${post.body}
        ${post.createdBy}
      </div>`
    })
    cb(postTemplates)
  })
}

let showUserProfile = (userId, cb) => {
  getUserById(userId, user => {
    const profile = `
      <div>
        ${user.name}
      </div>
    `
    cb(user)
  })
}

module.exports = { showUserProfile, showPostsForCurrentUser };
