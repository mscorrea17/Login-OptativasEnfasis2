
// Importar todos los modelos
const Role = require('./role.model');
const User = require('./user.model');
const Auth = require('./auth.model');
const Post = require('./post.model');
const Like = require('./like.model');
const Comment = require('./comment.model');

// Definir asociaciones
function setupAssociations() {
  // Asociación Role -> User
  Role.hasMany(User, {
    foreignKey: "role_id",
    sourceKey: "id",
    as: "Users"
  });
  User.belongsTo(Role, {
    foreignKey: "role_id",
    targetKey: "id",
    as: "Role"
  });

  // Asociación User -> Auth (1:1)
  User.hasOne(Auth, {
    foreignKey: "id",
    sourceKey: "id",
    as: "Auth"
  });
  Auth.belongsTo(User, {
    foreignKey: "id",
    targetKey: "id",
    as: "User"
  });

  // Asociación User -> Post
  User.hasMany(Post, {
    foreignKey: "author_id",
    sourceKey: "id",
    as: "Posts"
  });
  Post.belongsTo(User, {
    foreignKey: "author_id",
    targetKey: "id",
    as: "Author"
  });

  // Asociación Post -> Like
  Post.hasMany(Like, {
    foreignKey: "post_id",
    sourceKey: "id",
    as: "Likes"
  });
  Like.belongsTo(Post, {
    foreignKey: "post_id",
    targetKey: "id",
    as: "Post"
  });

  // Asociación User -> Like
  User.hasMany(Like, {
    foreignKey: "user_id",
    sourceKey: "id",
    as: "Likes"
  });
  Like.belongsTo(User, {
    foreignKey: "user_id",
    targetKey: "id",
    as: "Author"
  });

  // Asociación Post -> Comment
  Post.hasMany(Comment, {
    foreignKey: "post_id",
    sourceKey: "id",
    as: "Comments"
  });
  Comment.belongsTo(Post, {
    foreignKey: "post_id",
    targetKey: "id",
    as: "Post"
  });

  // Asociación User -> Comment
  User.hasMany(Comment, {
    foreignKey: "user_id",
    sourceKey: "id",
    as: "Comments"
  });
  Comment.belongsTo(User, {
    foreignKey: "user_id",
    targetKey: "id",
    as: "Author"
  });
}

module.exports = setupAssociations;