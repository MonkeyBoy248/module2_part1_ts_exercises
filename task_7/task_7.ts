interface User {
  type: 'user';
  name: string;
  age: number;
  occupation: string;
}

interface Admin {
  type: 'admin';
  name: string;
  age: number;
  role: string;
}

function logUser(user: User) {
  const pos = users.indexOf(user) + 1;
  console.log(` - #${pos} User: ${user.name}, ${user.age}, ${user.occupation}`);
}

function logAdmin(admin: Admin) {
  const pos = admins.indexOf(admin) + 1;
  console.log(` - #${pos} Admin: ${admin.name}, ${admin.age}, ${admin.role}`);
}

const admins: Admin[] = [
  {
      type: 'admin',
      name: 'Will Bruces',
      age: 30,
      role: 'Overseer'
  },
  {
      type: 'admin',
      name: 'Steve',
      age: 40,
      role: 'Steve'
  }
];

const users: User[] = [
  {
      type: 'user',
      name: 'Moses',
      age: 70,
      occupation: 'Desert guide'
  },
  {
      type: 'user',
      name: 'Superman',
      age: 28,
      occupation: 'Ordinary person'
  }
];

export function swap<T, U>(v1:T, v2:U): [U, T] {
  return [v2, v1];
}

