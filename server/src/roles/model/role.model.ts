
import { Model, Column, DataType, Table, BelongsToMany } from "sequelize-typescript";

import { User } from "src/users/model/user.model";
import { UserRoles } from "./user-roles.model";

interface RolesRequireFields {
   value: string;
   description: string;
}
@Table({ tableName: 'roles' })
export class Role extends Model<Role, RolesRequireFields> {

   @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
   id: number;

   @Column({ type: DataType.STRING, unique: true, allowNull: false })
   value: string;

   @Column({ type: DataType.STRING, allowNull: false })
   description: string;

   @BelongsToMany(() => User, () => UserRoles)
   users: User[];
}