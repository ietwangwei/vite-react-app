import React from 'react';
import Switch from 'rc-switch';
import { useSetRecoilState } from 'recoil';
import { themeModeState } from 'stores/themeStore';

import 'rc-switch/assets/index.css';

const MainHeader = () => {
  const setThemeMode = useSetRecoilState(themeModeState);
  const toggleThemeMode = mode => {
    if (mode) {
      setThemeMode('dark');
    } else {
      setThemeMode('light');
    }
  };

  return (
    <div className="main-header">
      this is MainHeader component!
      <Switch
        className="theme-switch"
        onChange={toggleThemeMode}
        onClick={toggleThemeMode}
        checkedChildren="dark"
        unCheckedChildren="light"
      />
    </div>
  );
};

export default MainHeader;
