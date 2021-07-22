
 import { Model, Column, DataType, Table, BelongsToMany } from "sequelize-typescript";
@Table
export class Role extends Model<Role> {

   @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
   id: number;

   @Column({ type: DataType.STRING, unique: true, allowNull: false })
   value: string;

   @Column({ type: DataType.STRING, allowNull: false })
   description: string;

   @BelongsToMany(() => User, () => UserRoles)
   users: User[];
}
