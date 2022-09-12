import { InferGetStaticPropsType } from 'next';
// import { ssgClient } from '@lib/queryClient';
// import { NamedQuery } from '@codegen';

export default function PostsPage({}: InferGetStaticPropsType<typeof getStaticProps>) {
  return <div>{/* Content */}</div>;
}

export const getStaticProps = async () => {
  // const { data } = (await ssgClient()
  //   .query(NamedQuery, {})
  //   .toPromise()) as { data: NamedQuery };

  return {
    props: {
      // data
    },
    revalidate: 120,
  };
};
