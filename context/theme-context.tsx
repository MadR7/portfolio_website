'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { themeConfig } from '@/components/themeConfig';

type Theme = 'light' | 'dark';

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
  getSectionBackground: (section: keyof typeof themeConfig) => string;
  getSectionTextColor: (section: keyof typeof themeConfig) => string;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export function ThemeContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState<Theme>('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme);
      return newTheme;
    });
  };

  const getSectionBackground = (section: keyof typeof themeConfig) => {
    return themeConfig[section][theme];
  };

  const getSectionTextColor = () => {
    return theme === 'light' ? themeConfig.textColor.light : 'light';
  };

  useEffect(() => {
    const localTheme = localStorage.getItem('theme') as Theme | null;
    if (localTheme) {
      setTheme(localTheme);
    }
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
        getSectionBackground,
        getSectionTextColor,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === null) {
    throw new Error('useTheme must be used within a ThemeContextProvider');
  }
  return context;
}