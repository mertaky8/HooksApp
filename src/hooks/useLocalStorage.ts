import { useEffect, useState } from "react";

export default function (lskey: string) {
  const [state, setState] = useState(() => {
    return localStorage.getItem(lskey) ?? "";
  });

  useEffect(() => {
    localStorage.setItem(lskey, state);
  }, [state]);

  return [state, setState] as const;
}
