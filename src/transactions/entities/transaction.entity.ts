import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Transaction {
  @PrimaryGeneratedColumn()
  //@PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({type:"text" , nullable: true})
  type: string;

  @Column({type:"real", nullable: true })
  amount: number;
}
