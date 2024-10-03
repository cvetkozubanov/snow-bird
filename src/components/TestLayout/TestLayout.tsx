import { FC } from 'react';

type TestLayoutProps = {
  children: React.ReactNode;
};

export const TestLayout: FC<TestLayoutProps> = ({ children }) => {
  return (
    <>
      <div>{children}</div>
    </>
  );
};
