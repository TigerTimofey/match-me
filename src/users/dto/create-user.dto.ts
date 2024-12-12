import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
  @ApiProperty({ example: "john@doe.com", description: "unique email" })
  readonly email: string;

  @ApiProperty({ example: "pass123word", description: "user password" })
  readonly password: string;

  @ApiProperty({ example: "John", description: "user name" })
  readonly name: string;

  @ApiProperty({ example: "Doe", description: "user lastname" })
  readonly lastname: string;
}
