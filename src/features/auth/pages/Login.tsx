import { useTranslation } from 'react-i18next';

import { LoginForm } from '../components/LoginForm';

export const Login = () => {
  const [t] = useTranslation('common');

  return (
    <div>
      <LoginForm />
    </div>
  );
};
