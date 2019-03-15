import React from 'react'
import {
  Create,
  SimpleForm,
  TextInput,
  NumberInput,
  SelectInput,
  SaveButton,
  Toolbar
} from 'react-admin'

const incomeChoices = [
  {id: 'Low Income', name: '0-$45,000'},
  {id: 'Medium Income', name: '$45,000-$90,000'},
  {id: 'High Income', name: '$90,000+'}
]

const budgetChoices = [
  {id: '$300,000-$500,000', name: '$300,000-$500,000'},
  {id: '$500,000-$700,000', name: '$500,000-$700,000'},
  {id: '$700,000-$900,000', name: '$700,000-$900,000'},
  {id: '$900,000+', name: '$900,000+'}
]

const educationChoices = [
  {id: 'Primary School', name: 'Primary School'},
  {id: 'High School', name: 'High School'},
  {id: 'University', name: 'University'}

]

const CustomToolbar = props => (
  <Toolbar {...props} >
    <SaveButton label="Find Suitable House" redirect="/map" />
  </Toolbar>
)

export default props => (
<Create {...props} title="Find Place to Stay" >
    <SimpleForm toolbar={<CustomToolbar />}>
  <h1>Find a Home </h1>

        <TextInput source="name" />
        <NumberInput source="age" />
        <SelectInput source="income" choices={incomeChoices} />
        <SelectInput source="budget" choices={budgetChoices} />
        <SelectInput source="education" choices={educationChoices} />
        <TextInput source="work" />
        <NumberInput source="familysize" />
        <TextInput source="school" /> 
    </SimpleForm>
  </Create>
)