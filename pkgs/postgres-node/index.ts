import pkg from 'pg';
import { mergeSchemas } from '@graphql-tools/schema';

const { Pool } = pkg;

const existing = new Pool({
  user: '',
  host: 'localhost',
  password: '',
  database: 'amplify',
  port: 5432, // Default PostgreSQL port is 5432
});

const getPostgresPool = async () => {
  try {
    const didConnect = await existing.connect(); // Wait for connection to be established
    didConnect.release(); // Wait for connection to be established
    return existing;
  } catch (e) {
    const p = new Pool({
      user: '',
      host: 'localhost',
      password: '',
      port: 5432, // Default PostgreSQL port is 5432
    });

    await p.query(`
      CREATE DATABASE amplify
      WITH
      OWNER = postgres
      ENCODING = 'UTF8'
      CONNECTION LIMIT = -1
      IS_TEMPLATE = False;
    `);
    return existing;
  }
};

const pool = await getPostgresPool();
export { pool };

export function mergeModulesSchemaWith(mergeIn) {
  return mergeSchemas({
    ...mergeIn,
  });
}
