import pkg from 'pg';
import { mergeSchemas } from '@graphql-tools/schema';

const { Pool } = pkg;

const existingPool = new Pool({
  user: '',
  host: 'localhost',
  database: 'amplify',
  password: '',
  port: 5000, // Default PostgreSQL port is 5432
});

const newUserPool = new Pool({
  user: '',
  host: 'localhost',
  password: '',
  port: 5000, // Default PostgreSQL port is 5432
});

const getPostgresPool = async () => {
  try {
    existingPool.connect();
    existingPool.end();
    return newUserPool;
  } catch (err) {
    {
      return newUserPool;
    }
  }
};

const pool = await getPostgresPool();
export { pool };

export function mergeModulesSchemaWith(mergeIn) {
  return mergeSchemas({
    ...mergeIn,
  });
}
