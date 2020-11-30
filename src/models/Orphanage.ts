import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinColumn,
  ManyToOne,
} from "typeorm";
import Image from "./Image";
import User from "./User";

// Orphanage Entity
@Entity("orphanages")
export default class Orphanage {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  latitude: number;

  @Column()
  longitude: number;

  @Column()
  about: string;

  @Column()
  instructions: string;

  @Column()
  opening_hours: string;

  @Column()
  phone: string;

  @Column()
  open_on_weekends: boolean;

  @Column()
  is_accepted: boolean;

  @OneToMany(() => Image, (image) => image.orphanage, {
    cascade: ["insert", "update"],
  })
  @JoinColumn({ name: "orphanage_id" })
  images: Image[];
}