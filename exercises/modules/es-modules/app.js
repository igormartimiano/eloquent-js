import getLastItem, { getFirstItem } from './utils.js';
import { users } from './users.js';

console.log(
  getLastItem([33, 555, 900]),
  getFirstItem([33, 555, 900]),
  users.sortUsers()
);