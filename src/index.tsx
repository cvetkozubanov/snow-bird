import ReactDOM from 'react-dom/client';
import { I18nextProvider } from 'react-i18next';

import { QueryClientProvider } from '@tanstack/react-query';
import { initializeApp } from 'firebase/app';
import i18next from 'i18next';

import { AuthProvider } from '@/contexts';
import { firebaseOptions } from '@/lib/firebase';
import { queryClient } from '@/lib/react-query';

import { App } from './App';
import './i18n';
import './index.css';

initializeApp(firebaseOptions);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <QueryClientProvider client={queryClient}>
    <I18nextProvider i18n={i18next}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </I18nextProvider>
  </QueryClientProvider>
);
