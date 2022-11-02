import { api } from '../server/api';

export default async function Page() {
  const test = await api.test();

  return <div className='text-red-500'>Server Rendered Page: {test?.test}</div>;
}
