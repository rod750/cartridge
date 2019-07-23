import React from 'react';
import { Query } from 'react-apollo';
import { GET_GAMES_QUERY } from '../../queries/games/getGames';
import {
    Column,
    Notification,
    Icon,
    Card,
    CardHeader,
    CardImage,
    CardContent,
    Title,
    Image,
    Media,
    MediaContent,
    Content,
    Tag
} from 'bloomer';
import { Subtitle } from 'bloomer/lib/elements/Subtitle';
import { RatingComponent } from '../shared/RatingComponent';

export class GameDetailComponent extends React.Component {
    render() {
        return (
            <Query query={GET_GAMES_QUERY}>
                {({data, loading}) => {
                    if(loading) {
                        return <Notification><Icon className="mdi mdi-loading spinner" /> Loading</Notification>
                    }
                    if(!data || !data.games) {
                        return <Notification isColor="dark"><Icon className="mdi mdi-alert" />Uh oh. Something is not working.</Notification>
                    }

                    const { id } = this.props.match.params;

                    var game = data.games.find((game) => game.id === parseInt(id));

                    if(!game){
                        return <Notification>Game not found.</Notification>
                    }

                    return (
                        <Column>
                            <Card>
                                <CardHeader>
                                    <CardImage>
                                        <Image isRatio='13:18' src={game.coverUrl} />
                                    </CardImage>
                                </CardHeader>
                                <CardContent>
                                    <Media>
                                        <MediaContent>
                                            <Title isSize={4}>{game.name}</Title>
                                            <Subtitle isSize={6}>{game.platform.name}</Subtitle>
                                        </MediaContent>
                                    </Media>
                                    <Content>
                                        {game.description}
                                    </Content>
                                    <Content>
                                        <span>Developers: </span>
                                        {(game.developers.map((developer) => {
                                            return <Tag className="is-dark">{developer.name}</Tag>;
                                        }))}
                                    </Content>
                                    <Content>
                                        <span>Tags: </span>
                                        {(game.tags.map((tag) => {
                                            return <Tag className="is-dark">{tag.name}</Tag>;
                                        }))}
                                    </Content>
                                    <Content>
                                        <span>Rating: </span>
                                        <RatingComponent rating={game.rating} />
                                    </Content>
                                </CardContent>
                            </Card>
                        </Column>
                    )
                }}
            </Query>
        );
    }
}
