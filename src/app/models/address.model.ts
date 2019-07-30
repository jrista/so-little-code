import { Key } from "@briebug/ngrx-auto-entity";

export class Address {
    @Key id?: number;
    street1: string;
    street2: string;
    city: string;
    state: string;
    zip: string;
}