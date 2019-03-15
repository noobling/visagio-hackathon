import React from "react";
import { Create, SimpleForm, TextInput, DateInput } from "react-admin";

export default props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <DateInput
        source="dateOfBirth"
        defaultValue={new Date()}
      />
    </SimpleForm>
  </Create>
);
