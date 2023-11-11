import { PostOffice } from "./post-office.interface";
import { ShipmentType } from "./shipment-type.interface";
import { ShipmentWeights } from "./shipment-weights.interface";

export interface Shipment {
    id: string,
    type: ShipmentType,
    origin: boolean,
    destination: boolean,
    delivered: boolean,
    weight: ShipmentWeights,
    office: PostOffice,
}