/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { TravelService } from "../travel.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { TravelCreateInput } from "./TravelCreateInput";
import { TravelWhereInput } from "./TravelWhereInput";
import { TravelWhereUniqueInput } from "./TravelWhereUniqueInput";
import { TravelFindManyArgs } from "./TravelFindManyArgs";
import { TravelUpdateInput } from "./TravelUpdateInput";
import { Travel } from "./Travel";
import { TicketFindManyArgs } from "../../ticket/base/TicketFindManyArgs";
import { Ticket } from "../../ticket/base/Ticket";
import { TicketWhereUniqueInput } from "../../ticket/base/TicketWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class TravelControllerBase {
  constructor(
    protected readonly service: TravelService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Travel })
  @nestAccessControl.UseRoles({
    resource: "Travel",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async create(@common.Body() data: TravelCreateInput): Promise<Travel> {
    return await this.service.create({
      data: {
        ...data,

        vehicleId: data.vehicleId
          ? {
              connect: data.vehicleId,
            }
          : undefined,
      },
      select: {
        basePrice: true,
        category: true,
        createdAt: true,
        date: true,
        destination: true,
        discount: true,
        id: true,
        source: true,
        updatedAt: true,

        vehicleId: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Travel] })
  @ApiNestedQuery(TravelFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Travel",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findMany(@common.Req() request: Request): Promise<Travel[]> {
    const args = plainToClass(TravelFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        basePrice: true,
        category: true,
        createdAt: true,
        date: true,
        destination: true,
        discount: true,
        id: true,
        source: true,
        updatedAt: true,

        vehicleId: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Travel })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Travel",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async findOne(
    @common.Param() params: TravelWhereUniqueInput
  ): Promise<Travel | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        basePrice: true,
        category: true,
        createdAt: true,
        date: true,
        destination: true,
        discount: true,
        id: true,
        source: true,
        updatedAt: true,

        vehicleId: {
          select: {
            id: true,
          },
        },
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Travel })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Travel",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async update(
    @common.Param() params: TravelWhereUniqueInput,
    @common.Body() data: TravelUpdateInput
  ): Promise<Travel | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          vehicleId: data.vehicleId
            ? {
                connect: data.vehicleId,
              }
            : undefined,
        },
        select: {
          basePrice: true,
          category: true,
          createdAt: true,
          date: true,
          destination: true,
          discount: true,
          id: true,
          source: true,
          updatedAt: true,

          vehicleId: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Travel })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Travel",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async delete(
    @common.Param() params: TravelWhereUniqueInput
  ): Promise<Travel | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          basePrice: true,
          category: true,
          createdAt: true,
          date: true,
          destination: true,
          discount: true,
          id: true,
          source: true,
          updatedAt: true,

          vehicleId: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/ticketId")
  @ApiNestedQuery(TicketFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Ticket",
    action: "read",
    possession: "any",
  })
  async findManyTicketId(
    @common.Req() request: Request,
    @common.Param() params: TravelWhereUniqueInput
  ): Promise<Ticket[]> {
    const query = plainToClass(TicketFindManyArgs, request.query);
    const results = await this.service.findTicketId(params.id, {
      ...query,
      select: {
        createdAt: true,
        firstName: true,
        gender: true,
        id: true,
        lastName: true,
        nationalId: true,
        phoneNumber: true,
        seatNumber: true,

        travelId: {
          select: {
            id: true,
          },
        },

        updatedAt: true,

        userId: {
          select: {
            id: true,
          },
        },

        vehicleId: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/ticketId")
  @nestAccessControl.UseRoles({
    resource: "Travel",
    action: "update",
    possession: "any",
  })
  async connectTicketId(
    @common.Param() params: TravelWhereUniqueInput,
    @common.Body() body: TicketWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      ticketId: {
        connect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/ticketId")
  @nestAccessControl.UseRoles({
    resource: "Travel",
    action: "update",
    possession: "any",
  })
  async updateTicketId(
    @common.Param() params: TravelWhereUniqueInput,
    @common.Body() body: TicketWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      ticketId: {
        set: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/ticketId")
  @nestAccessControl.UseRoles({
    resource: "Travel",
    action: "update",
    possession: "any",
  })
  async disconnectTicketId(
    @common.Param() params: TravelWhereUniqueInput,
    @common.Body() body: TicketWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      ticketId: {
        disconnect: body,
      },
    };
    await this.service.update({
      where: params,
      data,
      select: { id: true },
    });
  }
}