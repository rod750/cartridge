import React from 'react';
import {
    Modal,
    ModalBackground,
    ModalCardHeader,
    ModalCard,
    ModalCardTitle,
    Delete,
    ModalCardBody,
    ModalCardFooter,
    Button,
    Field,
    Label,
    Control,
    Notification,
    Icon
} from 'bloomer';
import { Mutation } from 'react-apollo';
import { Input } from 'bloomer/lib/elements/Form/Input';
import { CREATE_PLATFORM_QUERY } from '../../queries/platforms/createPlatform';
import { GET_PLATFORMS_QUERY } from '../../queries/platforms/getPlatforms';

export class NewEditPlatformComponent extends React.Component {
    constructor(props) {
        super(props);
        this.platformName = React.createRef();
        this.platformDescription = React.createRef();
        this.platformImageUrl = React.createRef();
        this.state = {
            isActive: false
        };
    }

    static getDerivedStateFromProps(props, state) {
        if(state.isActive !== props.isActive) {
            return {
                isActive: props.isActive
            }
        }

        return null;
    }

    showError(error) {
        if(error) {
            let isUserError = error.networkError.statusCode == 400;
    
            if(isUserError) {
                return (
                    <Notification isColor="danger">
                        <Icon className="mdi mdi-alert"></Icon><span>Please fill all required fields</span>
                    </Notification>
                );
            }

            return (
                <Notification>
                    Uh oh. Something is not working.
                </Notification>
            );
        }
    }

    modalNew() {
        return (
            <Modal isActive={this.state.isActive}>
                <Mutation mutation={CREATE_PLATFORM_QUERY} update={this.updateState} onCompleted={this.props.onSave}>
                    {(createPlatform, { loading, error }) => (
                        <form onSubmit={this.handleCreate.bind(this, createPlatform)}>
                            <ModalBackground onClick={this.props.onClose} />
                            <ModalCard>
                                <ModalCardHeader>
                                    <ModalCardTitle>New platform</ModalCardTitle>
                                    <Delete onClick={this.props.onClose} />
                                </ModalCardHeader>
                                <ModalCardBody className="is-marginless">
                                    {this.showError(error)}
                                    <Field>
                                        <Label>Name (required)</Label>
                                        <Control>
                                            <Input type="text" name="name" />
                                        </Control>
                                    </Field>
                                    <Field>
                                        <Label>Description (required)</Label>
                                        <Control>
                                            <Input type="text" name="description" />
                                        </Control>
                                    </Field>
                                    <Field>
                                        <Label>Image URL (required)</Label>
                                        <Control>
                                            <Input type="text" name="imageUrl" />
                                        </Control>
                                    </Field>
                                </ModalCardBody>
                                <ModalCardFooter>
                                    <Button isColor="danger" type="submit" isLoading={loading} disabled={loading}>Save</Button>
                                    <Button isColor="light" onClick={this.props.onCancel} disabled={loading}>Cancel</Button>
                                </ModalCardFooter>
                            </ModalCard>
                        </form>
                    )}
                </Mutation>
            </Modal>
        );
    }

    handleCreate(createPlatform, e) {
        e.preventDefault();

        const prepare = (value) => {
            if(!value.length) {
                return undefined
            }

            return value;
        }

        createPlatform({
            variables: {
                platform: {
                    name: prepare(e.target.name.value),
                    description: prepare(e.target.description.value),
                    imageUrl: prepare(e.target.imageUrl.value)
                }
            }
        });
    }

    updateState(cache, { data: { createPlatform } }) {
        const { platforms } = cache.readQuery({ query: GET_PLATFORMS_QUERY });

        cache.writeQuery({
            query: GET_PLATFORMS_QUERY,
            data: { platforms: [createPlatform].concat(platforms) }
        });
    }

    render() {
        return this.modalNew();
    }
}
