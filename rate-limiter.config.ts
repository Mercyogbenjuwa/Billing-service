import { RateLimiterModuleAsyncOptions } from 'nestjs-rate-limiter';

export const rateLimiterConfig: RateLimiterModuleAsyncOptions = {
  imports: [], 
  useFactory: () => ({
    points: 5, 
    duration: 60, 
  }),
};
