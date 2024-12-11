import { ApiProperty, ApiTags } from "@nestjs/swagger";
import {
  BelongsToMany,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { User } from "src/users/users.models";
import { Role } from "./roles.models";

@Table({ tableName: "user_roles", createdAt: false, updatedAt: false })
export class UserRoles extends Model<UserRoles> {
  @ApiProperty({ example: "1", description: "unique identifier" })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ForeignKey(() => Role)
  @ApiProperty({ example: "Admin", description: "unique meaning of the role" })
  @Column({
    type: DataType.INTEGER,
  })
  roleId: number;

  @ForeignKey(() => User)
  @ApiProperty({ example: "Administrator", description: "role description" })
  @Column({
    type: DataType.INTEGER,
  })
  userId: number;
}
