import { Entity, EntityModule, Field } from '@fission-js/fission'

@Entity()
export class Order {
  @Field({ primary: true })
  id: number

  @Field()
  amount: number

  @Field({ nullable: true })
  client: string
}

export const OrderModule = EntityModule.forRoot(Order)
