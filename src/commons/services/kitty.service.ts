import { Apollo, gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import { Kitty } from '../models/kitty';
import { KittyInput } from '../models/kittyInput';

interface GetKittenResponse {
  kittens: Kitty[];
}

export const GET_KITTEN = gql`
query getKitten {
  kittens {
    id
    name
  }
}`;

export const setKitten = gql`
mutation createKitty($kitten: KittyInput) {
  createKitty(input: $kitten) {
    id
    name
  }
}`;
@Injectable({
  providedIn: 'root'
})
export class KittyService {
  kitten: Kitty[];
  kitty: Kitty;
  newKitty: KittyInput;
  
  constructor (
    private apollo: Apollo
  ) { 
    // We use the gql tag to parse our query string into a query document
  }

  generateId = () => {
    const randomId = Math.random();
    return randomId * 100;
  }

  getKitten = () => {
    return this.apollo.watchQuery<GetKittenResponse>({
      query: GET_KITTEN
    })
  }

  addNewKitty = (newkitty: Kitty) => {
    let id = this.generateId();
    this.apollo.mutate<Kitty>({
      mutation: setKitten,
      variables: {
        kitten: {
          id: Math.round(id).toString(),
          name: newkitty.name
        }
      }
    }).subscribe(result => {
      console.log(`Your new kitty ${JSON.stringify(result)} is ready to go to space`);
    },(error) => {
      console.log('Mission aborted. Sorry!', error);
    })
  }
}
