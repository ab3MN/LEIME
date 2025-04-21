'use client';

import { useEffect, useState } from 'react';
import React from 'react';

export function withHydration<P extends object>(WrappedComponent: React.ComponentType<P>) {
  const HydratedComponent = (props: P) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
      setIsMounted(true);
    }, []);

    if (!isMounted) return null;

    return <WrappedComponent {...props} />;
  };

  return HydratedComponent;
}
