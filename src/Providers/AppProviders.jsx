import { NotesProvider } from "../contexts/NotesCotext";

function AppProviders({ children }) {
  return <NotesProvider>{children}</NotesProvider>;
}
export default AppProviders;
