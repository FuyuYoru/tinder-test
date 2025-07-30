import { ApiPath } from "@shared/api/apiPaths";

export const signUp = async (login: string, password: string) => {
  const response = await fetch(ApiPath.signUp(), {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ login, password }),
  });

  const data = await response.json();
  return data;
};
