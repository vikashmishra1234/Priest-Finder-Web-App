// config/redisClient.js
import Redis from 'ioredis';

let redisClient;
console.log(import.meta.env.VITE_REDIS_PASSWORD)
if (!redisClient) {
  redisClient = new Redis({
    password: import.meta.env.VITE_REDIS_PASSWORD,
    host: import.meta.env.VITE_REDIS_HOST,
    port: 16584,
  });

  redisClient.on('error', (err) => {
    console.error('Redis error:', err);
  });

  redisClient.on('connect', () => {
    console.log('Connected to Redis');
  });
}

export default  redisClient;
