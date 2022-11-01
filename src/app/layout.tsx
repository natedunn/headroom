type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <div>
      <h1>Root Layout</h1>
      <div>
        Children:
        {children}
      </div>
    </div>
  );
}
