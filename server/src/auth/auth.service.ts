import { HttpException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import { LoginDto } from './dto/login.dto';
import bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async logIn(logInDto: LoginDto): Promise<{ access_token: string }> {
    const user = await this.userService.findOneByUsername(logInDto.username);

    if (!user) {
      throw new HttpException('User not found', 404);
    }

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    const isPasswordValid: boolean = await bcrypt.compare(
      logInDto.password,
      user.password,
    );

    if (!isPasswordValid) {
      throw new HttpException('Invalid credentials', 401);
    }

    const payload = { sub: user.id, username: user.username };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
