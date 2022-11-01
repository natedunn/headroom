type Props = {
  test: string;
};
export default function RootPage({ test }: Props) {
  return <div>Something custom {test}</div>;
}
