exports.up = async function(knex) {
  try
  {
  const hasTable = await knex.schema.hasTable('jf_library_items');
  if (hasTable) {
    await knex.schema.alterTable('jf_library_items', function(table) {
      table.boolean('archived').defaultTo(false);

    });
  }
}catch (error) {
  console.error(error);
}
};

exports.down = async function(knex) {
  try {
    await knex.schema.alterTable('jf_library_items', function(table) {
      table.dropColumn('archived');
    });

  } catch (error) {
    console.error(error);
  }
};
