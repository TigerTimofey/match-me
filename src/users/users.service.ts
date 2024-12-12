import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { User } from "./users.models";
import { CreateUserDto } from "./dto/create-user.dto";
import { RolesService } from "src/roles/roles.service";

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User) private userRepository: typeof User,
    private roleService: RolesService
  ) {}

  async createUser(dto: CreateUserDto) {
    const { email, password, name, lastname } = dto;
    const user = await this.userRepository.create({
      email,
      password,
      name,
      lastname,
    });

    // Get the role, "ADMIN"
    const role = await this.roleService.getRoleByValue("ADMIN");

    await user.$set("roles", [role.id]);
    user.roles = [role];
    return user;
  }

  async getAllUsers() {
    const users = await this.userRepository.findAll({ include: { all: true } });
    return users;
  }

  async getUserByEmail(email: string) {
    const user = await this.userRepository.findOne({
      where: { email },
      include: { all: true },
    });
    return user;
  }

  async removeUser(id: number): Promise<void> {
    await this.userRepository.destroy({ where: { id } });
  }
}
