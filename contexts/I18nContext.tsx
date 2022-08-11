import React, { createContext, ReactNode, useMemo } from 'react';
import * as untypedLocalizations from '../localizations';

export const defaultLocale = 'fi';

type Localizations = { [key: string]: any };

const localizations : Localizations = untypedLocalizations.default;

const I18nContext = createContext({
  localizations: localizations[defaultLocale],
});

export type I18nProviderProps = {
  children: ReactNode;
  locale?: string;
};

function I18nProvider(props: I18nProviderProps) {
  const { locale, children } = props;

  const memoizedValue = useMemo(
    () => {
      const value = {
        localizations: localizations[locale as keyof typeof localizations],
      };
      return value;
    },
    [locale],
  );

  return (
    <I18nContext.Provider
      value={memoizedValue}
    >
      {children}
    </I18nContext.Provider>
  );
}

I18nProvider.defaultProps = {
  locale: defaultLocale,
};

export { I18nContext, I18nProvider };
