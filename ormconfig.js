const isDevelopment = process.env.NODE_ENV === 'development';

module.exports = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  logging: false,
  ssl: {
    rejectUnauthorized: false,
  },
  entities: [`./${isDevelopment ? 'src' : 'build/src'}/models/**/*{.ts,.js}`],
  migrations: [
    `./${isDevelopment ? 'src' : 'build/src'}/database/migration/**/*{.ts,.js}`,
  ],
  subscribers: [
    `./${isDevelopment ? 'src' : 'build/src'}/subscriber/**/*{.ts,.js}`,
  ],
  cli: {
    entitiesDir: `./${isDevelopment ? 'src' : 'build/src'}/models`,
    migrationsDir: `./${
      isDevelopment ? 'src' : 'build/src'
    }/database/migration`,
    subscribersDir: `./${isDevelopment ? 'src' : 'build/src'}/subscriber`,
  },
};
