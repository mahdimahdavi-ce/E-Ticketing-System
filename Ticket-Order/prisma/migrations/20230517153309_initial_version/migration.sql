-- CreateEnum
CREATE TYPE "EnumTicketGender" AS ENUM ('Male', 'Female');

-- CreateEnum
CREATE TYPE "EnumTravelCategory" AS ENUM ('Bus', 'Train', 'Airplane');

-- CreateEnum
CREATE TYPE "EnumVehicleCategory" AS ENUM ('Bus', 'Train', 'Airplaine');

-- CreateTable
CREATE TABLE "User" (
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "firstName" TEXT,
    "id" TEXT NOT NULL,
    "lastName" TEXT,
    "password" TEXT NOT NULL,
    "roles" JSONB NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "username" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ticket" (
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "firstName" TEXT NOT NULL,
    "gender" "EnumTicketGender" NOT NULL,
    "id" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "nationalId" TEXT NOT NULL,
    "phoneNumber" TEXT,
    "seatNumber" DOUBLE PRECISION NOT NULL,
    "travelIdId" TEXT,
    "updatedAt" TIMESTAMP(3),
    "vehicleId" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Ticket_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Travel" (
    "basePrice" DOUBLE PRECISION NOT NULL,
    "category" "EnumTravelCategory",
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "date" TIMESTAMP(3) NOT NULL,
    "destination" TEXT NOT NULL,
    "discount" TEXT,
    "id" TEXT NOT NULL,
    "source" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "vehicleIdId" TEXT,

    CONSTRAINT "Travel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Vehicle" (
    "category" "EnumVehicleCategory",
    "color" TEXT,
    "corporation" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id" TEXT NOT NULL,
    "numberOfSeats" DOUBLE PRECISION,
    "numberPlate" TEXT,
    "ownerNationalId" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Vehicle_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserTicket" (
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id" TEXT NOT NULL,
    "isCanceled" BOOLEAN,
    "ticketIdId" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT,

    CONSTRAINT "UserTicket_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Seat" (
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "id" TEXT NOT NULL,
    "isReserved" BOOLEAN,
    "seatNumber" DOUBLE PRECISION,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "vehicleIdId" TEXT,

    CONSTRAINT "Seat_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "UserTicket_ticketIdId_key" ON "UserTicket"("ticketIdId");

-- AddForeignKey
ALTER TABLE "Ticket" ADD CONSTRAINT "Ticket_travelIdId_fkey" FOREIGN KEY ("travelIdId") REFERENCES "Travel"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Travel" ADD CONSTRAINT "Travel_vehicleIdId_fkey" FOREIGN KEY ("vehicleIdId") REFERENCES "Vehicle"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserTicket" ADD CONSTRAINT "UserTicket_ticketIdId_fkey" FOREIGN KEY ("ticketIdId") REFERENCES "Ticket"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Seat" ADD CONSTRAINT "Seat_vehicleIdId_fkey" FOREIGN KEY ("vehicleIdId") REFERENCES "Vehicle"("id") ON DELETE SET NULL ON UPDATE CASCADE;
