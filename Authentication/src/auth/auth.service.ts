import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PrismaService } from "src/prisma.service";
import { JwtService } from "@nestjs/jwt";
import { Prisma } from "@prisma/client";

@Injectable()
export class AuthService {
    constructor(
        private prisma: PrismaService,
        private jwtService: JwtService
    ) { }

    async validateUser(username: string, password: string) {

        const user = await this.prisma.user.findFirst({
            where: {
                username: username,
                password: password
            }
        })

        if (user) {
            const { password, ...result } = user
            return result
        }

        return null
    }

    async login(user: any) {
        const isUserVerified = await this.isUserVerified(user.username)

        if (isUserVerified) {
            const payload = { username: user.username, sub: user.id }
            return {
                access_token: this.jwtService.sign(payload)
            }
        } else {
            return {
                statusCode: 401,
                message: 'Unauthorized',
                data: 'Your phone number is not verified'
            }
        }

    }

    async isUserVerified(username: string) {
        const user = await this.prisma.user.findFirst({
            where: {
                username: username
            }
        })

        if(user) {
            return user.isVerified ? true : false
        }

        return false
    }

    
}