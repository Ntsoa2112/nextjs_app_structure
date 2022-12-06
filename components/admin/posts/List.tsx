import { useMediaQuery } from '@mui/material';
import {
  Datagrid,
  List,
  ReferenceField,
  SimpleList,
  TextField,
} from 'react-admin';

export const PostList = () => {
  const isSmall = useMediaQuery((theme: any) => theme.breakpoints.down('sm'));
  return (
    <List>
      {isSmall ? (
        <SimpleList
          primaryText={(record) => record.id}
          secondaryText={(record) => record.title}
          tertiaryText={() => (
            <ReferenceField source="userId" reference="users" />
          )}
        />
      ) : (
        <Datagrid rowClick="edit">
          <TextField source="id" />
          <ReferenceField source="userId" reference="users" />
          <TextField source="title" />
        </Datagrid>
      )}
    </List>
  );
};
