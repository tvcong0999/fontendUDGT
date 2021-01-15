export class Vehicle {
    vehicleId: number;
    vehiclePlate: string;
    vehicleCC: number;
    vehicleColor: string;
    purchaseDate: string;
    vehicleBrand: string;
    status: string;
    vehicleChasisNumber: number;
    owner: {
        ownerId: string;
        ownerIdentificationNumber: string;
        drivingLicenseNumber: string;
        ownerName: string;
        ownerAddress: string;
        ownedVehicles: string;
    };   
}