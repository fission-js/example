import { AppModule as DynamicAppModule } from '@fission-js/fission'
import { ExampleModule, OrderModule } from '../entities'

export const AppModule = DynamicAppModule.forRoot([ExampleModule, OrderModule])
