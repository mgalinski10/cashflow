import { MongoClient } from "mongodb";

async function main() {
  const uri =
    "mongodb+srv://michalg359:23422BOOCt0N2cDy@cashflow.tvkpn.mongodb.net/?retryWrites=true&w=majority&appName=CashFlow";
  const client = new MongoClient(uri);

  try {
    await client.connect();

    // await listDataBases(client);
    // await createUser(client, { name: "michalg359", password: "michal1" });
    await findUserByName(client, "michalg359");
  } catch (e) {
    console.error(e);
  } finally {
    ` await client.close();`;
  }
}

main().catch(console.error);

async function createUser(
  client: MongoClient,
  newUser: { name: string; password: string }
) {
  const result = await client
    .db("CashFlow")
    .collection("Users")
    .insertOne(newUser);

  console.log(`New user created with the id ${result.insertedId}`);
}

async function findUserByName(client: MongoClient, userName: string) {
  const result = await client
    .db("CashFlow")
    .collection("Users")
    .findOne({ name: userName });

  if (result) {
    console.log(`Found a user with name: ${userName}`);
    console.log(result);
  } else {
    console.log(`Can't find User with name: ${userName}`);
  }
}

async function listDataBases(client: MongoClient) {
  const databasesList = await client.db().admin().listDatabases();

  console.log("Databases:");
  databasesList.databases.forEach((db) => console.log(`-> ${db.name}`));
}
