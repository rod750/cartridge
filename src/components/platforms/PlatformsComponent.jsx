import React from 'react';
import { Query } from 'react-apollo';
import { GET_PLATFORMS_QUERY } from '../../queries/platforms/getPlatforms';
import { PlatformComponent } from './PlatformComponent';
import { Notification, Icon } from 'bloomer';

const PlatformItem = (platform) => {
    return <PlatformComponent platform={platform} key={platform.id} />;
}

export class PlatformsComponent extends React.Component {
    render() {
        return (
            <Query query={GET_PLATFORMS_QUERY}>
                {({data, loading}) => {
                    if(loading) {
                        return <Notification><Icon className="mdi mdi-loading spinner" /> Loading</Notification>;
                    }
                    if(!data || !data.platforms) {
                        return <Notification isColor="dark"><Icon className="mdi mdi-alert" />Uh oh. Something is not working.</Notification>;
                    }
                    if(data.platforms.length === 0){
                        return <Notification>There are no platforms registered.</Notification>;
                    }

                    return data.platforms.map(PlatformItem);
                }}
            </Query>
        );
    }
}
