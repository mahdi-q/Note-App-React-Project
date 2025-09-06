/* eslint-disable react-refresh/only-export-components */

import { render, type RenderOptions } from "@testing-library/react";
import type { ReactElement } from "react";
import AppProviders from "./Providers/AppProviders";

const customRender = (ui: ReactElement, options?: RenderOptions) =>
  render(ui, { wrapper: AppProviders, ...options });

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };
