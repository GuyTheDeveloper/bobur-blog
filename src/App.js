import { useAuth } from "./hooks/useAuth";
import { Private } from "./private.app";
import { Public } from "./public.app";

export const App = () => {
  const { token } = useAuth();
  if (token) {
    return <Private />;
  }

  return <Public />;
};
