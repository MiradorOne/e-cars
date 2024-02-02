import * as React from "react";
import { useHydrated } from "./use-hydrated";
import { ReactNode } from "react";

type Props = {
  children(): ReactNode;
  fallback?: React.ReactNode;
};

export function ClientOnly({ children, fallback = null }: Props) {
  return useHydrated() ? <>{children()}</> : <>{fallback}</>;
}
