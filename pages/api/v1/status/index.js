import database from "infra/database.js";

async function status(request, response) {
  const updateAt = new Date().toISOString();

  const databaseVersionResult = await database.query("SHOW server_version;");
  const databaseVersion = databaseVersionResult.rows[0].server_version;

  const maxConnectionResult = await database.query("SHOW max_connections;");
  const maxConnections = maxConnectionResult.rows[0].max_connections;

  //const openConnectionsResult = await database.query(
  //  "SELECT sum(numbackends) FROM pg_stat_database;",
  //);
  //const openConnections = openConnectionsResult.rows[0].sum;

  const databaseName = process.env.POSTGRES_DB;
  const openConnectionsResult = await database.query({
    text: "SELECT count(*)::int FROM pg_stat_activity WHERE datname = $1;",
    values: [databaseName],
  });
  const openConnections = openConnectionsResult.rows[0].count;

  response.status(200).json({
    update_at: updateAt,
    dependencies: {
      database: {
        version: databaseVersion,
        max_connections: parseInt(maxConnections),
        open_connections: openConnections,
      },
    },
  });
}

export default status;
