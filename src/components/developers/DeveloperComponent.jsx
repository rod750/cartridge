import React from 'react';
import {
    Card,
    CardContent,
    MediaContent,
    Media,
    Title,
    MediaLeft,
    Icon
} from 'bloomer';

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
                    </Media>
                </CardContent>
            </Card>
        );
    }
}
