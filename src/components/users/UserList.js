import React from 'react';
import { List, Datagrid, TextField, NumberField } from 'react-admin';

export default (props) => (
    <List {...props}>
        <Datagrid>
          <TextField source="numberOfBedrooms" />
          <TextField source="numberOfBathrooms" />
          <TextField source="carspace" />
          <TextField source="name" />
          <TextField source="age" />
          <TextField source="income" />
          <TextField source="budget"  />
          <TextField source="education" />
          <TextField source="work" />
          <TextField source="familysize" />
          <TextField source="school" /> 
        </Datagrid>
    </List>
);