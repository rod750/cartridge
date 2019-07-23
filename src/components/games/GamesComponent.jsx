import React from 'react';
import { Query } from 'react-apollo';
import { GET_GAMES_QUERY } from '../../queries/games/getGames';
import { GameComponent } from './GameComponent';
import { Columns, Column, Notification, Icon } from 'bloomer';

const GameList = (games) => {
    return (
        <Columns className="games-list" isMultiline={true}>
            {games.map(GameItem)}
        </Columns>
    )
}

const GameItem = (game) => {
    return (
        <Column isSize={2}>
            <GameComponent game={game} key={game.id} />
        </Column>
    );
}

export class GamesComponent extends React.Component {
    render() {
        return (
            <Query query={GET_GAMES_QUERY}>
                {({data, loading}) => {
                    if(loading) {
                        return <Notification><Icon className="mdi mdi-loading spinner" /> Loading</Notification>
                    }
                    if(!data || !data.games) {
                        return <Notification isColor="dark"><Icon className="mdi mdi-alert" />Ha ocurrido un error, intentalo de nuevo más tarde.</Notification>
                    }
                    if(data.games.length === 0){
                        return <Notification>No has agregado ningún juego.</Notification>
                    }

                    return GameList(data.games);
                }}
            </Query>
        );
    }
}
