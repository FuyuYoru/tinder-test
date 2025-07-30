import { get, set, del, keys } from 'idb-keyval'

export async function saveUser(login: string, password: string) {
  await set(login, { login, password })
}

export async function getUser(login: string) {
  return get<{ login: string; password: string }>(login)
}

export async function getAllUsers() {
  const allKeys = await keys()
  const all = await Promise.all(allKeys.map((key) => get(key)))
  return all.filter(Boolean)
}
