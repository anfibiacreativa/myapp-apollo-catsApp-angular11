import { APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink} from 'apollo-angular/http';
import {InMemoryCache} from '@apollo/client/core';
import {NgModule} from '@angular/core';




const uri = 'http://localhost:8000/api'; // <-- add the URL of the GraphQL server here
export function createApollo(httpLink: HttpLink) {
  return {
    link: httpLink.create({
      uri
    }),
    cache: new InMemoryCache(),
  };
}

@NgModule({
  exports: [],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {}
