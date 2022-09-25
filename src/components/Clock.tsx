import React, { useState, useEffect, useLayoutEffect } from 'react';

const UPDATE_CYCLE = 1000;

const KEY_LOCALE = 'KEY_LOCALE';

enum Locale {
  US = 'en-US',
  JP = 'ja-JP',
};

const getLocaleFromString = (text: string) => {
  switch (text) {
    case Locale.US:
      return Locale.US;
    case Locale.JP:
      return Locale.JP;
    default:
      return Locale.US;
  }
};

export const Clock = () => {
  // TODO: What are the types of timestamp and locale?
  const [timestamp, setTimestamp] = useState(new Date());
  const [locale, setLocale] = useState(Locale.US);

  // Effect for setting timer
  useEffect(() => {
    // timestamp will be updated with the current time every 1 second
    const timer = setInterval(() => {
      setTimestamp(new Date())
    }, UPDATE_CYCLE);
    // clearInterval method cancels a timed, repeating action which was previously established by a call to setInterval
    // This function will be called when the component is unmounted to stop the timer after the component is no longer available
    return () => {
      clearInterval(timer)
    };
    // This effect will only be executed at the beginning of displaying
  }, []);

  // Effect for reading values from localstorage
  // TODO: How to use localStorage
  useLayoutEffect(() => {
    const saveLocale = localStorage.getItem(KEY_LOCALE);
    if (saveLocale !== null) {
      setLocale(getLocaleFromString(saveLocale));
    }
    // This effect will only be executed at the beginning of displaying
  }, []);

  // Effect for setting a value to localstorage when locale is changed
  useEffect(() => {
    localStorage.setItem(KEY_LOCALE, locale);
  }, [locale]);

  return (
    <div>
      <p>
        <span id="current-time-label">Current Time</span>
        <span>: {timestamp.toLocaleString(locale)}</span>
        <select
          value={locale}
          onChange={(e) => setLocale(getLocaleFromString(e.target.value))}>
          <option value="en-US">en-US</option>
          <option value="ja-JP">ja-JP</option>
        </select>
      </p>
    </div>
  );

};