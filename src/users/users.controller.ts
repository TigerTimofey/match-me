import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UseGuards,
} from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UsersService } from "./users.service";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { User } from "./users.models";
import { JwtAuthGuard } from "src/auth/guard/jwt-auth.guard";
import { Roles } from "src/auth/guard/roles-auth.decorator";
import { RolesGuard } from "src/auth/guard/roles.guard";

@ApiTags("Users")
@Controller("users")
export class UsersController {
  constructor(private usersService: UsersService) {}

  @ApiOperation({ summary: "Create user" })
  @ApiResponse({ status: 200, type: User })
  @Post()
  create(@Body() userDto: CreateUserDto) {
    return this.usersService.createUser(userDto);
  }

  @ApiOperation({ summary: "Get all users" })
  @ApiResponse({ status: 200, type: [User] })
  // @UseGuards(JwtAuthGuard)
  // @Roles("ADMIN")
  // @UseGuards(RolesGuard)
  @Get()
  getAll() {
    return this.usersService.getAllUsers();
  }

  @ApiOperation({ summary: "Remove user" })
  @ApiResponse({ status: 200, type: [User] })
  // @Roles("ADMIN")
  // @UseGuards(RolesGuard)
  @Delete(":id")
  removeSession(@Param("id") id: number) {
    return this.usersService.removeUser(id);
  }
}
