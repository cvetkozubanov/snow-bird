import { useTranslation } from 'react-i18next';

import { DashboardComponent } from '../components/DashboardComponent';

export const DashboardFeature = () => {
  const [t] = useTranslation('common');

  return (
    <div>
      <DashboardComponent header={t('overview')} />
    </div>
  );
};
