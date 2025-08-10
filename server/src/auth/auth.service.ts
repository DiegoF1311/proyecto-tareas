import { HttpException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import { LoginDto } from './dto/login.dto';
import bcrypt from 'bcrypt';
import { User } from 'src/user/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async logIn(
    logInDto: LoginDto,
  ): Promise<{ user: User; access_token: string }> {
    const userAux = await this.userService.findOneByUsername(logInDto.username);

    if (!userAux) {
      throw new HttpException('User not found', 404);
    }

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    const isPasswordValid: boolean = await bcrypt.compare(
      logInDto.password,
      userAux.password,
    );

    if (!isPasswordValid) {
      throw new HttpException('Invalid credentials', 401);
    }

    const payload = { sub: userAux.id, username: userAux.username };
    return {
      user: userAux,
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
