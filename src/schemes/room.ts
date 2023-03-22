import { DataTypes } from 'sequelize';

import sequealize from '../sequelize';
import User from './user';

const Room = sequealize.define('room', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  opponentId: {
    type: DataTypes.UUID,
    references: {
      model: User,
    },
  },
});

export default Room;
