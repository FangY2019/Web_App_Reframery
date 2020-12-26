import jwt from 'jsonwebtoken';

export const generateToken = (user) => {
  return jwt.sign(
    {
      _id: user._id,
      username: user.username,
      email: user.email,
      admin: user.isAdmin,
      superAdmin:user.isSuperAdmin,
      communityID: user.communityID,
    },
    // process.env.JWT_SECRET || 'somethingsecret',
    'somethingsecret',
    {
      expiresIn: '30d',//expried days
    }
  );
};