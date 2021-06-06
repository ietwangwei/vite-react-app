import React, { useEffect } from 'react';
import { Switch } from 'antd';

import styles from './index.module.scss';

const ThemeSet = () => {
  useEffect(() => {
    window.document.documentElement.setAttribute('data-theme', 'light');
  }, []);

  const handleSwitchTheme = checked => {
    const theme = checked ? 'light' : 'dark';

    window.document.documentElement.setAttribute('data-theme', theme);
  };

  return (
    <Switch
      className={styles.switchTheme}
      defaultChecked="light"
      checkedChildren="light"
      unCheckedChildren="dark"
      onChange={handleSwitchTheme}
    />
  );
};

export default ThemeSet;
