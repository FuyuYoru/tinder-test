import { http, HttpResponse } from 'msw'
import { get, set, keys } from 'idb-keyval'
import { IUser } from '@entities/user/model';

const USERS_STORE = 'users'
const TOKEN = 'mock-token-tinder'
const defaultUser = {
  firstname: null,
  lastname: null,
  avatar: null,
  photos: [],
  passions: [],
  birthDate: null,
  createdAt: new Date().toISOString(),
  confirmed: false,
}

async function getUser(login: string) {
  return get<IUser>(login)
}

async function saveUser(user: IUser) {
  await set(user.login, user)
}

async function getAllUsers() {
  const allKeys = await keys()
  const users = await Promise.all(allKeys.map((key) => get(key)))
  return users.filter(Boolean)
}

export const handlers = [
  http.post('/auth/signUp', async ({ request }) => {
    const body = (await request.json()) as Pick<IUser, 'login' | 'password'>;
    const existing = await getUser(body.login)

    if (existing) {
      return HttpResponse.json({ message: 'User already exists' }, { status: 409 })
    }

    const newUser = { id: crypto.randomUUID(), ...defaultUser, ...body }
    await saveUser(newUser)

    const { password, ...rest } = newUser;

    return HttpResponse.json({ message: 'Registered', user: rest }, {
      status: 201, headers: {
        'set-Cookie': `token=${TOKEN}; Max-Age=3600`
      }
    })
  }),

  http.post('/auth/signIn', async ({ request }) => {
    const { login, password } = await request.json()
    const user = await getUser(login)

    if (!user || user.password !== password) {
      return HttpResponse.json({ message: 'Invalid credentials' }, { status: 401 })
    }

    return HttpResponse.json({
      token: `mock-token-${user.login}`,
      user: user,
    }, {
      status: 200, headers: {
        'Set-Cookie': `token=${TOKEN}; Path=/; HttpOnly`
      }
    })
  }),

  http.get('/auth/check/:login', async ({ params }) => {
    const { login } = params

    const user = await getUser(login)

    if (!user) {
      return HttpResponse.json({ message: 'User not found' }, { status: 404 })
    }

    const { password, ...data } = user;

    return HttpResponse.json({ existing: true, id: data.id })
  }),

  http.post('/user/profile-update', async ({ request, cookies }) => {
    const { login, name } = await request.json()
    const token = cookies.token;

    if (!token || token !== TOKEN) {
      return HttpResponse.json(null, { status: 401 })
    }

    const user = await getUser(login)

    if (!user) {
      return HttpResponse.json({ message: 'User not found' }, { status: 404 })
    }

    const updated = { ...user, name }
    await saveUser(updated)

    return HttpResponse.json({ message: 'Profile updated', user: updated })
  }),

  // Get users list
  http.get('/user/list', async ({ cookies }) => {
    const token = cookies.token;

    if (!token || token !== TOKEN) {
      return HttpResponse.json(null, { status: 401 })
    }

    const users = await getAllUsers()
    const result = users.map(u => ({ id: u?.id, login: u?.login, name: u?.name }))
    return HttpResponse.json(result)
  }),
]
