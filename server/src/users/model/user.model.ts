import { Column, DataType, Model, Table, BelongsToMany } from 'sequelize-typescript';

import { Role } from 'src/roles/model/role.model';
import { UserRoles } from 'src/roles/model/user-roles.model';

interface UserRequireField {
   email: string;
   password: string;
}

@Table({ tableName: 'users' })
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

   @BelongsToMany(() => Role, () => UserRoles)
   roles: Role[];
}