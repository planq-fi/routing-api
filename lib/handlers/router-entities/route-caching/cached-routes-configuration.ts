import { ChainId, TradeType } from '@planq-fi/sdk-core'
import { CacheMode } from '@planq-fi/smart-order-router'
import { CachedRoutesStrategy } from './model/cached-routes-strategy'
import { PairTradeTypeChainId } from './model/pair-trade-type-chain-id'
import { CachedRoutesBucket } from './model/cached-routes-bucket'

/**
 * This is the main configuration for the caching strategies of routes.
 *
 * The keys are generated by calling the `toString` method in the `PairTradeTypeChainId` class,
 * this way we can guarantee the correct format of the key.
 *
 * The values are an object of type `CachedRoutesStrategy`.
 * which receive an array of `CachedRoutesParameters` with the configuration of the buckets.
 */
export const CACHED_ROUTES_CONFIGURATION: Map<string, CachedRoutesStrategy> = new Map([
  /**
   * WETH/USDC - Mainnet
   */
  [
    new PairTradeTypeChainId({
      tokenIn: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2', // WETH
      tokenOut: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48', // USDC
      tradeType: TradeType.EXACT_INPUT,
      chainId: ChainId.MAINNET,
    }).toString(),
    new CachedRoutesStrategy({
      pair: 'WETH/USDC',
      tradeType: TradeType.EXACT_INPUT,
      chainId: ChainId.MAINNET,
      buckets: [
        new CachedRoutesBucket({ bucket: 0.2, cacheMode: CacheMode.Livemode }),
        new CachedRoutesBucket({ bucket: 1, cacheMode: CacheMode.Livemode }),
        new CachedRoutesBucket({ bucket: 3, cacheMode: CacheMode.Livemode }),
        new CachedRoutesBucket({ bucket: 5, cacheMode: CacheMode.Livemode }),
        new CachedRoutesBucket({ bucket: 8, cacheMode: CacheMode.Livemode }),
        new CachedRoutesBucket({ bucket: 13, cacheMode: CacheMode.Livemode }),
        new CachedRoutesBucket({ bucket: 21, cacheMode: CacheMode.Livemode }),
        new CachedRoutesBucket({ bucket: 34, cacheMode: CacheMode.Livemode }),
        new CachedRoutesBucket({ bucket: 55, cacheMode: CacheMode.Livemode }),
      ],
    }),
  ],
  /**
   * USDC/WETH - Mainnet
   */
  [
    new PairTradeTypeChainId({
      tokenIn: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48', // USDC
      tokenOut: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2', // WETH
      tradeType: TradeType.EXACT_INPUT,
      chainId: ChainId.MAINNET,
    }).toString(),
    new CachedRoutesStrategy({
      pair: 'USDC/WETH',
      tradeType: TradeType.EXACT_INPUT,
      chainId: ChainId.MAINNET,
      buckets: [
        new CachedRoutesBucket({ bucket: 500, cacheMode: CacheMode.Livemode }),
        new CachedRoutesBucket({ bucket: 1_000, cacheMode: CacheMode.Livemode }),
        new CachedRoutesBucket({ bucket: 3_000, cacheMode: CacheMode.Livemode }),
        new CachedRoutesBucket({ bucket: 8_000, cacheMode: CacheMode.Livemode }),
        new CachedRoutesBucket({ bucket: 13_000, cacheMode: CacheMode.Livemode }),
        new CachedRoutesBucket({ bucket: 21_000, cacheMode: CacheMode.Livemode }),
        new CachedRoutesBucket({ bucket: 34_000, cacheMode: CacheMode.Livemode }),
        new CachedRoutesBucket({ bucket: 55_000, cacheMode: CacheMode.Livemode }),
        new CachedRoutesBucket({ bucket: 89_000, cacheMode: CacheMode.Livemode }),
      ],
    }),
  ],
  /**
   * WETH/USDT - Mainnet
   */
  [
    new PairTradeTypeChainId({
      tokenIn: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2', // WETH
      tokenOut: '0xdac17f958d2ee523a2206206994597c13d831ec7', // USDT
      tradeType: TradeType.EXACT_INPUT,
      chainId: ChainId.MAINNET,
    }).toString(),
    new CachedRoutesStrategy({
      pair: 'WETH/USDT',
      tradeType: TradeType.EXACT_INPUT,
      chainId: ChainId.MAINNET,
      buckets: [
        new CachedRoutesBucket({ bucket: 0.2, cacheMode: CacheMode.Livemode }),
        new CachedRoutesBucket({ bucket: 1, cacheMode: CacheMode.Livemode }),
        new CachedRoutesBucket({ bucket: 3, cacheMode: CacheMode.Livemode }),
        new CachedRoutesBucket({ bucket: 5, cacheMode: CacheMode.Livemode }),
        new CachedRoutesBucket({ bucket: 8, cacheMode: CacheMode.Livemode }),
        new CachedRoutesBucket({ bucket: 13, cacheMode: CacheMode.Livemode }),
        new CachedRoutesBucket({ bucket: 21, cacheMode: CacheMode.Livemode }),
        new CachedRoutesBucket({ bucket: 34, cacheMode: CacheMode.Livemode }),
        new CachedRoutesBucket({ bucket: 55, cacheMode: CacheMode.Livemode }),
      ],
    }),
  ],
  /**
   * USDT/WETH - Mainnet
   */
  [
    new PairTradeTypeChainId({
      tokenIn: '0xdac17f958d2ee523a2206206994597c13d831ec7', // USDT
      tokenOut: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2', // WETH
      tradeType: TradeType.EXACT_INPUT,
      chainId: ChainId.MAINNET,
    }).toString(),
    new CachedRoutesStrategy({
      pair: 'USDT/WETH',
      tradeType: TradeType.EXACT_INPUT,
      chainId: ChainId.MAINNET,
      buckets: [
        new CachedRoutesBucket({ bucket: 500, cacheMode: CacheMode.Livemode }),
        new CachedRoutesBucket({ bucket: 1_000, cacheMode: CacheMode.Livemode }),
        new CachedRoutesBucket({ bucket: 3_000, cacheMode: CacheMode.Livemode }),
        new CachedRoutesBucket({ bucket: 8_000, cacheMode: CacheMode.Livemode }),
        new CachedRoutesBucket({ bucket: 13_000, cacheMode: CacheMode.Livemode }),
        new CachedRoutesBucket({ bucket: 21_000, cacheMode: CacheMode.Livemode }),
        new CachedRoutesBucket({ bucket: 34_000, cacheMode: CacheMode.Livemode }),
        new CachedRoutesBucket({ bucket: 55_000, cacheMode: CacheMode.Livemode }),
        new CachedRoutesBucket({ bucket: 89_000, cacheMode: CacheMode.Livemode }),
      ],
    }),
  ],
  [
    new PairTradeTypeChainId({
      tokenIn: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2', // WETH
      tokenOut: '*', // ANY TOKEN
      tradeType: TradeType.EXACT_INPUT,
      chainId: ChainId.MAINNET,
    }).toString(),
    new CachedRoutesStrategy({
      pair: 'WETH/*',
      tradeType: TradeType.EXACT_INPUT,
      chainId: ChainId.MAINNET,
      buckets: [
        // Any amounts lower than 0.015 in Mainnet are likely to be heavily influenced by the gas prices. Darkmoding everything below 0.01
        new CachedRoutesBucket({ bucket: 0.015, cacheMode: CacheMode.Darkmode }), // Intentionally Darkmoded
        new CachedRoutesBucket({ bucket: 0.05, cacheMode: CacheMode.Livemode, withLastNCachedRoutes: 20 }),
        new CachedRoutesBucket({ bucket: 0.1, cacheMode: CacheMode.Livemode, withLastNCachedRoutes: 20 }),
        new CachedRoutesBucket({ bucket: 0.5, cacheMode: CacheMode.Livemode, withLastNCachedRoutes: 20 }),
        new CachedRoutesBucket({ bucket: 1, cacheMode: CacheMode.Livemode, withLastNCachedRoutes: 20 }),
        new CachedRoutesBucket({ bucket: 2, cacheMode: CacheMode.Livemode, withLastNCachedRoutes: 15 }),
        new CachedRoutesBucket({ bucket: 3, cacheMode: CacheMode.Livemode, withLastNCachedRoutes: 15 }),
        new CachedRoutesBucket({ bucket: 4, cacheMode: CacheMode.Livemode, withLastNCachedRoutes: 15 }),
        new CachedRoutesBucket({ bucket: 5, cacheMode: CacheMode.Livemode, withLastNCachedRoutes: 15 }),
      ],
    }),
  ],
  [
    new PairTradeTypeChainId({
      tokenIn: '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48', // USDC
      tokenOut: '*', // ANY TOKEN
      tradeType: TradeType.EXACT_INPUT,
      chainId: ChainId.MAINNET,
    }).toString(),
    new CachedRoutesStrategy({
      pair: 'USDC/*',
      tradeType: TradeType.EXACT_INPUT,
      chainId: ChainId.MAINNET,
      buckets: [
        new CachedRoutesBucket({ bucket: 100, cacheMode: CacheMode.Darkmode, withLastNCachedRoutes: 10 }),
        new CachedRoutesBucket({ bucket: 300, cacheMode: CacheMode.Livemode, withLastNCachedRoutes: 10 }),
        new CachedRoutesBucket({ bucket: 500, cacheMode: CacheMode.Livemode, withLastNCachedRoutes: 10 }),
        new CachedRoutesBucket({ bucket: 750, cacheMode: CacheMode.Livemode, withLastNCachedRoutes: 10 }),
        new CachedRoutesBucket({ bucket: 1_000, cacheMode: CacheMode.Livemode, withLastNCachedRoutes: 10 }),
        new CachedRoutesBucket({ bucket: 3_000, cacheMode: CacheMode.Livemode, withLastNCachedRoutes: 10 }),
        new CachedRoutesBucket({ bucket: 8_000, cacheMode: CacheMode.Livemode, withLastNCachedRoutes: 10 }),
        new CachedRoutesBucket({ bucket: 13_000, cacheMode: CacheMode.Livemode, withLastNCachedRoutes: 10 }),
      ],
    }),
  ],
  /**
   * NOTE: Only Cache configuration for Pricing below this comment
   * These configurations are influenced by the frontend configuration:
   * https://github.com/Uniswap/interface/blob/main/src/hooks/useUSDPrice.ts#L15
   */
  [
    new PairTradeTypeChainId({
      tokenIn: '*', // ANY TOKEN
      tokenOut: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2', // WETH
      tradeType: TradeType.EXACT_OUTPUT,
      chainId: ChainId.MAINNET,
    }).toString(),
    new CachedRoutesStrategy({
      pair: '*/WETH',
      tradeType: TradeType.EXACT_OUTPUT,
      chainId: ChainId.MAINNET,
      buckets: [
        new CachedRoutesBucket({ bucket: 0.015, cacheMode: CacheMode.Darkmode }),
        new CachedRoutesBucket({ bucket: 0.05, cacheMode: CacheMode.Darkmode }),
        new CachedRoutesBucket({ bucket: 0.1, cacheMode: CacheMode.Tapcompare, withLastNCachedRoutes: 10 }),
        new CachedRoutesBucket({ bucket: 0.5, cacheMode: CacheMode.Tapcompare, withLastNCachedRoutes: 10 }),
        new CachedRoutesBucket({ bucket: 1, cacheMode: CacheMode.Tapcompare, withLastNCachedRoutes: 10 }),
        new CachedRoutesBucket({ bucket: 2, cacheMode: CacheMode.Tapcompare, withLastNCachedRoutes: 10 }),
        new CachedRoutesBucket({ bucket: 4, cacheMode: CacheMode.Tapcompare, withLastNCachedRoutes: 10 }),
        new CachedRoutesBucket({ bucket: 6, cacheMode: CacheMode.Tapcompare, withLastNCachedRoutes: 10 }),
        new CachedRoutesBucket({ bucket: 10, cacheMode: CacheMode.Tapcompare, withLastNCachedRoutes: 10 }),
        new CachedRoutesBucket({ bucket: 16, cacheMode: CacheMode.Tapcompare, withLastNCachedRoutes: 10 }),
        new CachedRoutesBucket({ bucket: 30, cacheMode: CacheMode.Tapcompare, withLastNCachedRoutes: 10 }),
        new CachedRoutesBucket({ bucket: 45, cacheMode: CacheMode.Tapcompare, withLastNCachedRoutes: 10 }),
        new CachedRoutesBucket({ bucket: 55, cacheMode: CacheMode.Livemode, withLastNCachedRoutes: 10 }),
        new CachedRoutesBucket({ bucket: 80, cacheMode: CacheMode.Tapcompare, withLastNCachedRoutes: 10 }),
        new CachedRoutesBucket({ bucket: 95, cacheMode: CacheMode.Tapcompare, withLastNCachedRoutes: 10 }),
        new CachedRoutesBucket({ bucket: 110, cacheMode: CacheMode.Tapcompare, withLastNCachedRoutes: 10 }),
      ],
    }),
  ],
])
