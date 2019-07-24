import React from 'react';
import { Query } from 'react-apollo';
import { GET_PLATFORMS_QUERY } from '../../queries/platforms/getPlatforms';
import { PlatformComponent } from './PlatformComponent';
import { Notification, Icon } from 'bloomer';
import { ToolbarComponent } from '../shared/ToolbarComponent';
import { NewEditPlatformComponent } from './NewEditPlatformComponent';

const PlatformItem = (platform) => {
    return <PlatformComponent platform={platform} key={platform.id} />;
}

export class PlatformsComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isNewEditModalActive: false };
        this.onAddNew = this.onAddNew.bind(this);
        this.onCancel = this.onCancel.bind(this);
        this.onClose = this.onClose.bind(this);
        this.onSave = this.onSave.bind(this);
    }

    render() {
        return (
            <div>
                <NewEditPlatformComponent isActive={this.state.isNewEditModalActive} onCancel={this.onCancel} onClose={this.onClose} onSave={this.onSave} />
                <ToolbarComponent onAddNew={this.onAddNew} />
                <Query query={GET_PLATFORMS_QUERY}>
                    {({data, loading}) => {
                        if(loading) {
                            return <Notification><Icon className="mdi mdi-loading spinner" /> Loading</Notification>;
                        }
                        if(!data || !data.platforms) {
                            return <Notification isColor="dark"><Icon className="mdi mdi-alert" />Uh oh. Something is not working.</Notification>;
                        }
                        if(data.platforms.length === 0){
                            return <Notification>There are no platforms registered.</Notification>;
                        }

                        return data.platforms.map(PlatformItem);
                    }}
                </Query>
            </div>
        );
    }

    onAddNew() {
        this.showNewEditModal();
    }

    onClose() {
        this.closeNewEditModal();
    }

    onCancel() {
        this.closeNewEditModal();
    }

    onSave() {
        this.closeNewEditModal();
    }

    showNewEditModal() {
        this.setState({ isNewEditModalActive: true })
    }

    closeNewEditModal() {
        this.setState({ isNewEditModalActive: false });
    }
}
