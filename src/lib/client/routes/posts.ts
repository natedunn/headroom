import { publicProcedure } from '../index';
import { gql } from 'graphql-tag';
import type { PostsQuery } from '@codegen';
import { gqlQuery } from '../_plugins/graphql/urqlClient';

export default {
  posts: publicProcedure.query(async ({ ctx }) => {
    const data = await gqlQuery<PostsQuery>(gql`
      query Posts {
        posts {
          data {
            title
            body
            id
          }
        }
      }
    `);

    return data;
  }),
};
