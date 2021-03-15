import { initReactI18next } from 'react-i18next';
import { NAVIGATOR_DEFAULT_LANGUAGE } from 'constants/index.js';
import Cookies from 'js-cookie';
import resources from 'locales';

const getCurrentSystemLang = () => {
  if (NAVIGATOR_DEFAULT_LANGUAGE.includes(navigator.language)) {
    return 'zh_CN';
  }

  return navigator.language;
};

T.use(initReactI18next).init({
  resources,
  lng: Cookies.get('lang') || getCurrentSystemLang(),
  keySeparator: false,
  interpolation: {
    escapeValue: false
  }
});

// export default locales;
