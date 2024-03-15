import { pool } from '@amplify/postgres-node';
import { QueryResult } from 'pg';

interface MigrationRow {
  name: string;
}

const getAppliedMigrations = async (): Promise<string[]> => {
  const checkInit: string = `
    SELECT EXISTS (
      SELECT 1
      FROM   information_schema.tables 
      WHERE  table_schema = 'public'
      AND    table_name = 'migration'
    );
  `;

  const client = await pool.connect();

  try {
    const results: QueryResult = await client.query(checkInit);
    const doesExist: boolean = results.rows[0].exists;

    if (!doesExist) {
      return [];
    }

    const query: string = `SELECT name FROM public.migration`;
    const namesResult: QueryResult<MigrationRow> = await client.query(query);

    const listOfNames: string[] = namesResult.rows.map((row) => row.name);

    return listOfNames;
  } catch (error) {
    // Handle the error appropriately, you can log it or throw a custom error
    throw new Error('Error getting migrations');
  } finally {
    client.release();
  }
};

const updateMigrationTable = async (migrationName: string) => {
  try {
    const client = await pool.connect();
    const query = 'INSERT INTO public.migration (name) VALUES ($1)';
    const values = [migrationName];
    await client.query(query, values);
    client.release();
  } catch (error) {
    // Handle the error appropriately, you can log it or throw a custom error
    throw new Error('Error updating migration table');
  }
};

export { updateMigrationTable };
export { getAppliedMigrations };
