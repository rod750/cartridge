import React from 'react';
import {
    Card,
    CardContent,
    MediaContent,
    Media,
    Title,
    MediaLeft,
    Icon,
    MediaRight,
    Button
} from 'bloomer';
import { GET_TAGS_QUERY } from '../../queries/tags/getTags';
import { DELETE_TAG_QUERY } from '../../queries/tags/deleteTag';
import { Mutation } from 'react-apollo';

export class TagComponent extends React.Component {
    render() {
        return (
            <Card>
                <CardContent>
                    <Media>
                        <MediaLeft>
                            <Icon className="mdi mdi-tag mdi-48px" />
                        </MediaLeft>
                        <MediaContent>
                            <Title isSize={4}>{this.props.tag.name}</Title>
                        </MediaContent>
                        <MediaRight>
                            {this.deleteButton(this.props.tag.id)}
                        </MediaRight>
                    </Media>
                </CardContent>
            </Card>
        );
    }

    deleteButton(id) {
        return (
            <Mutation mutation={DELETE_TAG_QUERY} update={this.updateState}>
                {(deleteTag, { loading, error }) => (
                    <Button isLoading={loading} isColor="warning" onClick={() => { deleteTag({ variables: { id: id } }) }}><Icon className="mdi mdi-delete" /><span>Delete</span></Button>
                )}
            </Mutation>
        )
    }

    updateState(cache, { data: { deleteTag } }) {
        const { tags } = cache.readQuery({ query: GET_TAGS_QUERY });

        cache.writeQuery({
            query: GET_TAGS_QUERY,
            data: { tags: tags.filter((tag) => tag.id !== deleteTag) }
        });
    }
}
