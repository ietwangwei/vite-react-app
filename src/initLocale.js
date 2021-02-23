import { initReactI18next } from 'react-i18next';
import i18next from 'i18next';
import Cookies from 'js-cookie';
import resources from 'locales';

const getCurrentSystemLang = () => {
  if (navigator.language === 'zh') {
    return 'zh_CN';
  }

  return navigator.language;
};

i18next.use(initReactI18next).init({
  resources,
  lng: Cookies.get('lang') || getCurrentSystemLang(),
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});

// export default locales;
