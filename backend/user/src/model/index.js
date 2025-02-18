const User = require('./User.model');
const Role = require('./Role.model');
const OAuthProvider = require('./OAuthProvider.model');
const Session = require('./Session.model');

// Define associations
User.belongsTo(Role, { foreignKey: 'role_id' });
User.hasMany(OAuthProvider, { foreignKey: 'user_id' });
User.hasMany(Session, { foreignKey: 'user_id' });

OAuthProvider.belongsTo(User, { foreignKey: 'user_id' });
Session.belongsTo(User, { foreignKey: 'user_id' });

module.exports = { User, Role, OAuthProvider, Session };
