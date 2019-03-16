import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Title } from 'react-admin';
export default () => (
    <Card>
        <Title title="Government Dashboard" />
        <CardContent><iframe width="700px" height="700px" src="http://goofy-pasteur-c43cc8.netlify.com/"></iframe></CardContent>
    </Card>
);