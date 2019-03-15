import React from 'react'
import {
  Create,
  SimpleForm,
  TextInput,
  NumberInput,
  SelectInput
} from 'react-admin'

const incomeChoices = [
  {id: 'lowIncome', name: '0-$45,000'},
  {id: 'medIncome', name: '$45,000-$90,000'},
  {id: 'highIncome', name: '$90,000+'}
]

export default props => (
  <Create {...props} title="Find Place to Stay">
    <SimpleForm>
        <TextInput source="name" />
        <NumberInput source="age" />
        <SelectInput source="income" choices={incomeChoices} />
    </SimpleForm>
  </Create>
)