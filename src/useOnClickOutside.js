import React, { useEffect } from 'react'

const useOnClickOutside = (ref, currentState, updater) => {
  useEffect(() => {
    const handler = (event) => {
      if (currentState && ref.current && !ref.current.contains(event.target)) {
        updater();
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, [ref, currentState, updater]);
};

export default useOnClickOutside