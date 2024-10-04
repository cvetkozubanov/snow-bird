import { FC } from 'react';

type DashboardLayoutProps = {
  children: React.ReactNode;
};

export const DashboardLayout: FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <>
      <div>{children}</div>
    </>
  );
};
