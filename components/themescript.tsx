import React from 'react'

export default function ThemeScript() {
  const themeScript = `
    (function() {
      function getThemePreference() {
        if(typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
          return localStorage.getItem('theme');
        }
        return 'dark';
      }
      
      const theme = getThemePreference();
      
      if (theme === 'dark') {
        document.documentElement.classList.add('dark');
      }
    })();
  `

  // eslint-disable-next-line react/no-danger
  return <script dangerouslySetInnerHTML={{ __html: themeScript }} />
}