import { InferGetStaticPropsType } from 'next';
// import { client } from '@lib/apollo-client';

export default function PostsPage({}: InferGetStaticPropsType<typeof getStaticProps>) {
  return <div>{/* Content */}</div>;
}

export const getStaticProps = async () => {
  // const { data } = (await client.query({
  //   query: NamedQuery,
  // })) as { data: NamedQuery };

  return {
    props: {},
    // revalidate: 120,
  };
};
