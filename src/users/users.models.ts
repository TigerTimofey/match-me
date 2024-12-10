import { ApiProperty, ApiTags } from "@nestjs/swagger";
import { Column, DataType, Model, Table } from "sequelize-typescript";

interface UserCreationAttr {
  email: string;
  password: string;
}

@Table({ tableName: "users" })
export class User extends Model<User> {
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
}
