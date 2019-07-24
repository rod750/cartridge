import React from 'react';
import {
    Card,
    CardImage,
    Image,
    CardContent,
    MediaContent,
    Media,
    Title,
    Content,
    Tag
} from 'bloomer';
import { Link } from 'react-router-dom';

export class GameComponent extends React.Component {
    render() {
        return (
            <Link to={"/games/"+this.props.game.id}>
                <Card>
                    <CardImage>
                        <Image isRatio="2:3" src={this.props.game.coverUrl} />
                    </CardImage>
                    <CardContent>
                        <Media>
                            <MediaContent>
                                <Title isSize={4}>{this.props.game.name}</Title>
                            </MediaContent>
                        </Media>
                        <Content>
                            {this.props.game.description}
                        </Content>
                        <Content>
                            {(this.props.game.tags.map((tag) => {
                                return <Tag className="is-dark">{tag.name}</Tag>;
                            }))}
                        </Content>
                    </CardContent>
                </Card>
            </Link>
        );
    }
}
