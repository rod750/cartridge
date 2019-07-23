import React from 'react';
import { Query } from 'react-apollo';
import { Notification, Icon } from 'bloomer';
import { TagComponent } from './TagComponent';
import { GET_TAGS_QUERY } from '../../queries/tags/getTags';

const TagItem = (tag) => {
    return <TagComponent tag={tag} key={tag.id} />;
}

export class TagsComponent extends React.Component {
    render() {
        return (
            <Query query={GET_TAGS_QUERY}>
                {({data, loading}) => {
                    if(loading) {
                        return <Notification><Icon className="mdi mdi-loading spinner" /> Loading</Notification>;
                    }
                    if(!data || !data.tags) {
                        return <Notification isColor="dark"><Icon className="mdi mdi-alert" />Uh oh. Something is not working.</Notification>;
                    }
                    if(data.tags.length === 0){
                        return <Notification>There are no tags registered.</Notification>;
                    }

                    return data.tags.map(TagItem);
                }}
            </Query>
        );
    }
}
