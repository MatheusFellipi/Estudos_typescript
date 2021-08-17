import { v4 as uuidV4 } from "uuid";
import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";

class Car {
  id?: string;
  category_id: string;
  name: string;
  description: string;
  daily_rate: number;
  license_plate: string;
  available: boolean;
  fine_amount: number;
  brand: string;
  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Car };
