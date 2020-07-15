/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import {Contract, ContractTransaction, EventFilter, Signer} from 'ethers';
import {Listener, Provider} from 'ethers/providers';
import {Arrayish, BigNumber, BigNumberish, Interface} from 'ethers/utils';
import {TransactionOverrides, TypedEventDescription, TypedFunctionDescription} from '.';

interface MockAggregatorUniDaiEthInterface extends Interface {
  functions: {
    latestAnswer: TypedFunctionDescription<{encode([]: []): string}>;
  };

  events: {
    AnswerUpdated: TypedEventDescription<{
      encodeTopics([current, roundId, timestamp]: [
        BigNumberish | null,
        BigNumberish | null,
        null
      ]): string[];
    }>;
  };
}

export class MockAggregatorUniDaiEth extends Contract {
  connect(signerOrProvider: Signer | Provider | string): MockAggregatorUniDaiEth;
  attach(addressOrName: string): MockAggregatorUniDaiEth;
  deployed(): Promise<MockAggregatorUniDaiEth>;

  on(event: EventFilter | string, listener: Listener): MockAggregatorUniDaiEth;
  once(event: EventFilter | string, listener: Listener): MockAggregatorUniDaiEth;
  addListener(eventName: EventFilter | string, listener: Listener): MockAggregatorUniDaiEth;
  removeAllListeners(eventName: EventFilter | string): MockAggregatorUniDaiEth;
  removeListener(eventName: any, listener: Listener): MockAggregatorUniDaiEth;

  interface: MockAggregatorUniDaiEthInterface;

  functions: {
    latestAnswer(): Promise<BigNumber>;
  };

  latestAnswer(): Promise<BigNumber>;

  filters: {
    AnswerUpdated(
      current: BigNumberish | null,
      roundId: BigNumberish | null,
      timestamp: null
    ): EventFilter;
  };

  estimate: {
    latestAnswer(): Promise<BigNumber>;
  };
}