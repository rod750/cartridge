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
import { GET_DEVELOPERS_QUERY } from '../../queries/developers/getDevelopers';
import { DELETE_DEVELOPER_QUERY } from '../../queries/developers/deleteDeveloper';
import { Mutation } from 'react-apollo';

export class DeveloperComponent extends React.Component {
    render() {
        return (
            <Card>
                <CardContent>
                    <Media>
                        <MediaLeft>
                            <Icon className="mdi mdi-code-array mdi-48px" />
                        </MediaLeft>
                        <MediaContent>
                            <Title isSize={4}>{this.props.developer.name}</Title>
                        </MediaContent>
                        <MediaRight>
                            {this.deleteButton(this.props.developer.id)}
                        </MediaRight>
                    </Media>
                </CardContent>
            </Card>
        );
    }

    deleteButton(id) {
        return (
            <Mutation mutation={DELETE_DEVELOPER_QUERY} update={this.updateState}>
                {(deleteDeveloper, { loading, error }) => (
                    <Button isLoading={loading} isColor="warning" onClick={() => { deleteDeveloper({ variables: { id: id } }) }}><Icon className="mdi mdi-delete" /><span>Delete</span></Button>
                )}
            </Mutation>
        )
    }

    updateState(cache, { data: { deleteDeveloper } }) {
        const { developers } = cache.readQuery({ query: GET_DEVELOPERS_QUERY });

        cache.writeQuery({
            query: GET_DEVELOPERS_QUERY,
            data: { developers: developers.filter((developer) => developer.id !== deleteDeveloper) }
        });
    }
}
