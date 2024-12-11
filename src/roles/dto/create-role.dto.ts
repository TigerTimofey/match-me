import { ApiProperty } from "@nestjs/swagger";

export class CreateRoleDto {
  @ApiProperty({ example: "value", description: "unique value" })
  readonly value: string;
  @ApiProperty({ example: "value", description: "unique value" })
  readonly description: string;
}
