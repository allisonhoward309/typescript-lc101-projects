import { Payload } from './Payload';
import { Cargo } from './Cargo';
import { Astronaut } from './Astronaut';
export class Rocket {
    name: string;
    totalCapacityKg: number;
    CargoItems: Cargo[] = [];
    astronauts: Astronaut[] = [];
    
    constructor (name: string, totalCapacityKg: number) {
    this.name = name;
    this.totalCapacityKg = totalCapacityKg;
    }

    sumMass(items: Payload[]): number {
        let total: number =0;
        for (let i = 0; i<items.length; i++) {
            total += items[i].massKg;
        } 
        return total;
    }

    currentMassKg(): number {
        return this.sumMass(this.astronauts) + this.sumMass(this.CargoItems);
    }

    canAdd(item: Payload): boolean {
         return (this.currentMassKg() + item.massKg) <= this.totalCapacityKg;
    }

    addCargo(cargo: Cargo): boolean {
     if(this.canAdd(cargo)) {
        this.CargoItems.push(cargo);
        return true;
     }   else {
         return false;
     }
    }

    addAstronaut(astronaut: Astronaut): boolean {
        if(this.canAdd(astronaut)) {
            this.astronauts.push(astronaut);
            return true;
        } else {
            return false;
        }
    }

 }