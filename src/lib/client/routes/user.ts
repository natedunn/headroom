import { publicProcedure } from '../index';

export default {
  users: publicProcedure.query(() => {
    return [
      {
        id: 1,
        name: 'John Doe',
      },
      {
        id: 2,
        name: 'Jane Doe',
      },
      {
        id: 3,
        name: 'Alex Smith',
      },
    ];
  }),
};
