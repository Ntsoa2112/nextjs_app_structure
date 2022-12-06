import jsonServerProvider from 'ra-data-json-server';
import { Admin, Resource } from 'react-admin';
import { CommentList } from './comments/List';
import { PostList } from './posts/List';
import { UserList } from './users/List';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="users" list={UserList} recordRepresentation="name" />
    <Resource name="posts" list={PostList} />
    <Resource name="comments" list={CommentList} />
  </Admin>
);

export default App;
