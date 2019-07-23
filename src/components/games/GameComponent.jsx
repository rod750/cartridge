import React from 'react';
import {
    Card,
    CardImage,
    Image,
    CardHeader,
    CardContent,
    MediaContent,
    Media,
    Title,
    Content,
    Tag
} from 'bloomer';

export class GameComponent extends React.Component {
    render() {
        return (
            <Card>
                <CardHeader>
                    <CardImage>
                        <Image isRatio='13:18' src={this.props.game.coverUrl} />
                    </CardImage>
                </CardHeader>
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
        );
    }
}
