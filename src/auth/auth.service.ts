// src/auth/auth.service.ts
import {
  Injectable,
  UnauthorizedException,
  ConflictException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { RegisterDto } from './dto/register.dto';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.usersService.findByEmail(email);
    if (user && (await bcrypt.compare(password, user.password))) {
      return user;
    }
    throw new UnauthorizedException('Invalid credentials');
  }

  async register(registerDto: RegisterDto) {
    const { email, password } = registerDto;

    const oldUser = await this.usersService.findByEmail(email);
    if (oldUser) {
      throw new ConflictException('Email already exists');
    }
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save the user using the UserService (assuming UserService has a createUser method)
    return this.usersService.createUser({ email, password: hashedPassword });
  }

  async login(user: any) {
    const payload = { email: user.email, sub: user._id };
    return {
      access_token: this.jwtService.sign(payload),
      message: 'Login is successful',
    };
  }
}
