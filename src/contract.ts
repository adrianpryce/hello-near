// Find all our documentation at https://docs.near.org
import {
  NearBindgen,
  near,
  call,
  view,
  initialize,
  UnorderedMap,
} from "near-sdk-js";

import { assert } from "./utils";
import { Donation, STORAGE_COST } from "./model";

@NearBindgen({})
class HelloNear {
  greeting: string = "Hello";
  amount: number = 0;
  contractView: boolean = false;
  test: object = {};

  @view({}) // This method is read-only and can be called for free
  get_greeting(): string {
    return this.greeting;
  }

  @call({}) // This method changes the state, for which it cost gas
  set_greeting({ greeting }: { greeting: string }): void {
    near.log(`Saving greeting ${greeting}`);
    this.greeting = greeting;
  }

  @view({}) // This method is read-only and can be called for free
  get_amount(): number {
    return this.amount;
  }

  @call({}) // This method changes the state, for which it cost gas
  set_amount({ amountUsd }: { amountUsd: number }): void {
    near.log(`Saving greeting ${amountUsd}`);
    this.amount += amountUsd;
  }

  @view({}) // This method is read-only and can be called for free
  get_contract_view(): boolean {
    return this.contractView;
  }

  @call({}) // This method changes the state, for which it cost gas
  set_contract_view({ flag }: { flag: boolean }): void {
    this.contractView = flag;
  }

  @view({}) // This method is read-only and can be called for free
  get_view(): object {
    return this.test;
  }

  @call({}) // This method changes the state, for which it cost gas
  set_view({ text }: { text: object }): void {
    this.test = text;
  }
}
