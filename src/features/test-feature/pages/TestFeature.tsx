import { useTranslation } from 'react-i18next';

import { TestComponent } from '../components/TestComponent';

export const TestFeature = () => {
  const [t] = useTranslation('common');

  return (
    <div>
      <TestComponent header={t('test')} />
    </div>
  );
};
