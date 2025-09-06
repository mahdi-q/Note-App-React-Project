import type { ReactNode } from "react";
import { NotesProvider } from "../contexts/NotesCotext";

function AppProviders({ children }: { children: ReactNode }) {
  return <NotesProvider>{children}</NotesProvider>;
}
export default AppProviders;
