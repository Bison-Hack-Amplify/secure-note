import pkg from 'pg';
import { mergeSchemas } from '@graphql-tools/schema';

const { Pool } = pkg;

const getPostgresPool = async () => {
  const existing = new Pool({
    user: '',
    host: 'localhost',
    password: '',
    database: 'amplify',
    port: 5432, // Default PostgreSQL port is 5432
  });

  return existing;
};

const pool = async () => {
  await getPostgresPool();
};
export { pool };

export function mergeModulesSchemaWith(mergeIn: any) {
  return mergeSchemas({
    ...mergeIn,
  });
}
