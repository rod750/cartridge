import React from 'react';
import { Query } from 'react-apollo';
import { GET_DEVELOPERS_QUERY } from '../../queries/developers/getDevelopers';
import { DeveloperComponent } from './DeveloperComponent';
import { Notification, Icon } from 'bloomer';

const DeveloperItem = (developer) => {
    return <DeveloperComponent developer={developer} key={developer.id} />;
}

export class DevelopersComponent extends React.Component {
    render() {
        return (
            <Query query={GET_DEVELOPERS_QUERY}>
                {({data, loading}) => {
                    if(loading) {
                        return <Notification><Icon className="mdi mdi-loading spinner" /> Loading</Notification>;
                    }
                    if(!data || !data.developers) {
                        return <Notification isColor="dark"><Icon className="mdi mdi-alert" />Uh oh. Something is not working.</Notification>;
                    }
                    if(data.developers.length === 0){
                        return <Notification>There are no developers registered.</Notification>;
                    }

                    return data.developers.map(DeveloperItem);
                }}
            </Query>
        );
    }
}
