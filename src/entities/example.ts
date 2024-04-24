import { Entity, Field, EntityModule } from '@fission-js/fission'

@Entity()
export class Example {
  @Field({ primary: true })
  id: number

  @Field({ nullable: true })
  title: string

  @Field({ nullable: true })
  title2?: string

  @Field({ nullable: true })
  testField: string
}

export const ExampleModule = EntityModule.forRoot(Example)
