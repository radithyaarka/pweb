const payload = require('payload')
// import payload from 'payload';

/** @type {import('payload/types').CollectionConfig} */
const Todo = {
    slug: 'Todo',
    admin : {
      useAsTitle : 'name'
    },
    access: {
      read: () => true,
      update: () => true,
      delete: () => true,
      create: () => true,
    },

  hooks: {
    afterOperation: [
      async (args) => {
        if (args.operation === "create") {
          console.log('Operation:', args.operation);
          await payload.create({
            collection: "Logs",
            data: {
              name: args.result.name,
              log: args.result.id,
              timestamp: new Date(),
              action: "Todo Created",
            },
          });
        } else if (args.operation === "deleteByID") {
          console.log('Operation:', args.operation);
          await payload.create({
            collection: "Logs",
            data: {
              name: args.result.name,
              log: args.result.id,
              timestamp: new Date(),
              action: "Todo Deleted",
            },
          });
        } else if (args.operation === "updateByID") {
          console.log('Operation:', args.operation);
          await payload.create({
            collection: "Logs",
            data: {
              name: args.result.name,
              log: args.result.id,
              timestamp: new Date(),
              action: "Todo Updated",
            },
          });
        }
      },
    ],
  },

    fields: [
      {
        name: 'name',
        label: 'Title',
        type: 'text',
        required: true,
      },
      {
        name: 'Jobdesk',
        type: 'relationship',
        required: true,
        relationTo: 'Jobdesk',
      },
    ],
  };
  
  export default Todo;
  