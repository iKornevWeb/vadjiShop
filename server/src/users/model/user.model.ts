import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface UserRequireField {
    email: string;
    password: string;
}

@Table
export class User extends Model<User, UserRequireField> {
   @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
   id: number;
   
   @Column({ type: DataType.STRING, allowNull: false })
   email: string;

   @Column({ type: DataType.STRING, allowNull: false })
   password: string;

   @Column({ type: DataType.STRING })
   phone: string;

   @Column({ type: DataType.STRING })
   name: string;

   @Column({ type: DataType.STRING })
   surname: string;
}
