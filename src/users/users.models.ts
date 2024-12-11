import { ApiProperty, ApiTags } from "@nestjs/swagger";
import {
  BelongsToMany,
  Column,
  DataType,
  Model,
  Table,
} from "sequelize-typescript";
import { Role } from "src/roles/roles.models";
import { UserRoles } from "src/roles/user-roles.models";

interface UserCreationAttr {
  email: string;
  password: string;
}

@Table({ tableName: "users" })
export class User extends Model<User, UserCreationAttr> {
  @ApiProperty({ example: "1", description: "unique identifier" })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;
  @ApiProperty({ example: "john@doe.com", description: "unique email" })
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  email: string;
  @ApiProperty({ example: "pass123word", description: "user password" })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password: string;

  @BelongsToMany(() => Role, () => UserRoles)
  roles: Role[];
}
