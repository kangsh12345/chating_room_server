import { DataTypes } from 'sequelize';

import sequealize from '../sequelize';

const User = sequealize.define('user', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    unique: true,
  },
  usename: DataTypes.STRING,
  thumbnailImageUrl: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

export default User;
