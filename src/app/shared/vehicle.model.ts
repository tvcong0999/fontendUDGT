export class Vehicle {
    vehicleId: number;
    vehiclePlate: string;
    vehicleCC: number;
    vehicleColor: string;
    purchaseDate: string;
    vehicleBrand: string;
    status: string;
    chasisNumber: number;
    owner: {
        ownerId: string;
        ownerIdentificationNumber: string;
        drivingLicenseNumber: string;
        ownedVehicles: string;
    };   
}