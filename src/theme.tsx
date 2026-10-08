import { createContext, useContext, type ReactNode } from 'react';

export type MiniAppTheme = {
  colors: {
    text: string;
    textSecondary: string;
    background: string;
    surface: string;
    surfaceSelected: string;
  };
};

export const defaultMiniAppTheme: MiniAppTheme = {
  colors: {
    text: '#000000',
    textSecondary: '#60646C',
    background: '#ffffff',
    surface: '#F0F0F3',
    surfaceSelected: '#E0E1E6',
  },
};

const MiniAppThemeContext = createContext<MiniAppTheme>(defaultMiniAppTheme);

/** Rendered by the host app around every mini app so mini apps never import host code. */
export function MiniAppThemeProvider({ theme, children }: { theme: MiniAppTheme; children: ReactNode }) {
  return <MiniAppThemeContext.Provider value={theme}>{children}</MiniAppThemeContext.Provider>;
}

export function useMiniAppTheme() {
  return useContext(MiniAppThemeContext);
}
