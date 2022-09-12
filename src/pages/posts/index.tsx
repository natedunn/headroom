import { InferGetStaticPropsType } from 'next';
import { client } from '@lib/queryClient';
import { PostsPageQuery } from '@codegen';

export default function PostsPage({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>
      <div className='text-red-500'>Hello world</div>
      {posts
        ? posts?.map((post) => (
            <div key={post?.title}>
              <div>Post: {post?.title}</div>
              <div>DatabaseURL: {post?.databaseId}</div>
            </div>
          ))
        : null}
    </div>
  );
}

export const getStaticProps = async () => {
  const { data } = (await client.query({
    query: PostsPageQuery,
  })) as { data: PostsPageQuery };

  return {
    props: {
      seo: data?.page?.seo,
      posts: data?.posts?.nodes,
    },
    // revalidate: 120,
  };
};
