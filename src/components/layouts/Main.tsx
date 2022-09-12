import { ReactNode } from 'react';
import { NextSeoProps } from 'next-seo';

type Props = {
  children?: ReactNode;
  seo: NextSeoProps | null;
};

export const MainLayout = ({ children }: Props) => {
  return (
    <div>
      <main>{children}</main>
    </div>
  );
};
