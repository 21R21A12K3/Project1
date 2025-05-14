const sqlSnippets = [
  {
    title: "Create Table",
    code: `CREATE TABLE Users (\n  id INT PRIMARY KEY,\n  name VARCHAR(100),\n  email VARCHAR(100)\n);`,
    tags: ["sql", "ddl", "create"],
    description: "Creates a table named `Users` with columns `id`, `name`, and `email`."
  },
  {
    title: "Insert Data",
    code: `INSERT INTO Users (id, name, email)\nVALUES (1, 'Alice', 'alice@example.com');`,
    tags: ["sql", "insert", "dml"],
    description: "Inserts a new row into the `Users` table."
  },
  {
    title: "Select All Rows",
    code: `SELECT * FROM Users;`,
    tags: ["sql", "select"],
    description: "Fetches all columns and rows from the `Users` table."
  },
  {
    title: "Where Clause",
    code: `SELECT name FROM Users\nWHERE id = 1;`,
    tags: ["sql", "select", "where"],
    description: "Selects the `name` of the user whose `id` is 1."
  },
  {
    title: "Update Data",
    code: `UPDATE Users\nSET name = 'Bob'\nWHERE id = 1;`,
    tags: ["sql", "update"],
    description: "Updates the `name` field of the user with `id` 1."
  },
  {
    title: "Delete Row",
    code: `DELETE FROM Users\nWHERE id = 1;`,
    tags: ["sql", "delete"],
    description: "Deletes the user whose `id` is 1."
  },
  {
    title: "Order By",
    code: `SELECT * FROM Users\nORDER BY name ASC;`,
    tags: ["sql", "order", "sort"],
    description: "Fetches all users ordered by `name` in ascending order."
  },
  {
    title: "Group By",
    code: `SELECT role, COUNT(*)\nFROM Users\nGROUP BY role;`,
    tags: ["sql", "group", "aggregate"],
    description: "Groups users by `role` and returns the count for each group."
  },
  {
    title: "Inner Join",
    code: `SELECT Users.name, Orders.product\nFROM Users\nINNER JOIN Orders ON Users.id = Orders.user_id;`,
    tags: ["sql", "join", "inner"],
    description: "Performs an inner join between `Users` and `Orders` tables."
  },
  {
    title: "Create Index",
    code: `CREATE INDEX idx_name\nON Users (name);`,
    tags: ["sql", "index", "performance"],
    description: "Creates an index on the `name` column of the `Users` table."
  }
];
export default sqlSnippets