import { FC, useContext } from 'react';

import { TestLayout } from '@/components';
import { AuthContext } from '@/contexts';

interface TestComponentProps {
  header: string;
}

export const TestComponent: FC<TestComponentProps> = ({ header }) => {
  const { logout } = useContext(AuthContext);

  return (
    <TestLayout>
      <h3>{header}</h3>
      <button onClick={() => logout()}>Logout</button>
    </TestLayout>
  );
};
