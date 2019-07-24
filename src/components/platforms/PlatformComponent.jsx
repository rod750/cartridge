import React from 'react';
import {
    Card,
    Image,
    CardContent,
    MediaContent,
    Media,
    Title,
    MediaLeft,
    Subtitle,
    MediaRight,
    Button,
    Icon
} from 'bloomer';
import { Mutation } from 'react-apollo';
import { DELETE_PLATFORM_QUERY } from '../../queries/platforms/deletePlatform';
import { GET_PLATFORMS_QUERY } from '../../queries/platforms/getPlatforms';

export class PlatformComponent extends React.Component {
    render() {
        return (
            <Card>
                <CardContent>
                    <Media>
                        <MediaLeft>
                            <Image isSize="48x48" src={this.props.platform.imageUrl} />
                        </MediaLeft>
                        <MediaContent>
                            <Title isSize={4}>{this.props.platform.name}</Title>
                            <Subtitle isSize={6}>{this.props.platform.description}</Subtitle>
                        </MediaContent>
                        <MediaRight>
                            {this.deleteButton(this.props.platform.id)}
                        </MediaRight>
                    </Media>

                </CardContent>
            </Card>
        );
    }

    deleteButton(id) {
        return (
            <Mutation mutation={DELETE_PLATFORM_QUERY} update={this.updateState}>
                {(deletePlatform, { loading, error }) => (
                    <Button isLoading={loading} isColor="warning" onClick={() => { deletePlatform({ variables: { id: id } }) }}><Icon className="mdi mdi-delete" /><span>Delete</span></Button>
                )}
            </Mutation>
        )
    }

    updateState(cache, { data: { deletePlatform } }) {
        const { platforms } = cache.readQuery({ query: GET_PLATFORMS_QUERY });

        cache.writeQuery({
            query: GET_PLATFORMS_QUERY,
            data: { platforms: platforms.filter((platform) => platform.id !== deletePlatform) }
        });
    }
}
