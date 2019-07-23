import React from 'react';
import {
    Card,
    CardImage,
    Image,
    CardContent,
    MediaContent,
    Media,
    Title,
    MediaLeft,
    Subtitle
} from 'bloomer';

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
                    </Media>
                </CardContent>
            </Card>
        );
    }
}
