import { DataTypes } from 'sequelize';
import sequelize from '../sequelize.js';

const Record = sequelize.define(
  'Record',
  {
    _id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    position: {
      type: DataTypes.STRING,
      defaultValue: 'Human Resources',
    },
    level: {
      type: DataTypes.STRING,
      defaultValue: 'Junior',
    },
  },
  {
    // Other model options go here
  }
);

export default Record;
