import React from "react";
import { Table } from "bloomer";
import { GameModel } from "models";
import * as GameActions from "actions/GameActions";
import { RootState } from "state";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router";

export interface GamesComponentProps extends RouteComponentProps<void> {
    games: GameModel[];
    actions: Omit<typeof GameActions, 'Type'>;
}

@connect(
    (state: RootState, ownProps): Pick<GamesComponentProps, 'games'> => {
        const hash = ownProps.location && ownProps.location.hash.replace('#', '');
        const filter = FILTER_VALUES.find((value) => value === hash) || TodoModel.Filter.SHOW_ALL;
        return { games: state.todos, filter };
    },
    (dispatch: Dispatch): GamesComponentProps => ({
        actions: bindActionCreators(omit(GameActions, 'Type'), dispatch)
    })
)
export class GamesComponent extends React.Component<GamesComponentProps> {
    render() {
        const { games, actions } = this.props;
        return (
            <Table className="is-fullwidth">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Platform</th>
                        <th>Developer</th>
                        <th>Rating</th>
                    </tr>
                </thead>
                <tbody>
                    {games.map((game) => (
                        <tr>
                            <td>{game.name}</td>
                            <td>{game.platform.name}</td>
                            <td>{game.developers[0].name}</td>
                            <td>{game.rating}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        );
    }
}
