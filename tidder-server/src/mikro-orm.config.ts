import { __prod__ } from './constants';
import { Post } from './entities/Post';
import { MikroORM } from '@mikro-orm/core';
import path from 'path';
import { User } from './entities/User';

export default {
  migrations: {
    path: path.join(__dirname, './migrations'), // path to the folder with migrations
    pattern: /^[\w-]+\d+\.[tj]s$/, // regex pattern for the migration files
  },
  entities: [Post, User],
  dbName: 'tidder',
  type: 'postgresql',
  debug: !__prod__, //when we are not in production, debugging will be on
  user: 'postgres',
  password: 'TITOUN',
} as Parameters<typeof MikroORM.init>[0];
