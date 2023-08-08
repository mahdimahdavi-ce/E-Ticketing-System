import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { PrismaService } from 'src/prisma.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
        secret: process.env.SECRET_KEY,
        signOptions: { expiresIn: '604800s' },
      }),
    ],
  providers: [AuthService, LocalStrategy, PrismaService],
  exports: [AuthService]
})
export class AuthModule {}