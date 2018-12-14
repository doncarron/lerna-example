import styled from 'react-emotion'
import { TopSpacer } from 'mi.ux.styles'
import * as React from 'react'

import {
	Button,
	Card,
	CardActions,
	CardContent,
	Menu,
	MenuItem,
	Typography
} from '@material-ui/core'
import { translate, TranslationFunction } from 'react-i18next'
import { ILibraryItem, ILibraryItemGroup } from '@mitchell/ux.contracts'

import { ComponentConsumers } from './ComponentConsumers'
import { ComponentDependencies } from './ComponentDependencies'

const actionsBarHeight: string = '60px'

const StyledCard = styled(Card)`
	height: 300px;
	background-color: white;
`

const StyledCardBody = styled(CardContent)`
	height: calc(100% - ${actionsBarHeight});
`

const StyledCardActions = styled(CardActions)`
	height: ${actionsBarHeight};
	justify-content: flex-end;
`

export interface IComponentProps {
	component: ILibraryItemGroup
	t?: TranslationFunction
}

export interface IComponentState {
	selectedVersion: ILibraryItem
	anchorEl: any
}

// @ts-ignore
@translate(['translation'])
export class Component extends React.Component<IComponentProps, IComponentState> {
	private versions: ILibraryItem[] = []
	private defaultVersion: ILibraryItem = {
		Name: 'Null',
		Description: 'Null',
		Version: 'Null',
		Dependencies: [],
		Consumers: []
	}

	constructor(props: IComponentProps) {
		super(props)

		this.state = {
			selectedVersion: this.defaultVersion,
			anchorEl: null
		}
	}

	public componentDidMount() {
		this.versions = this.props.component.Value
		this.setState({
			selectedVersion: this.versions[0]
		})
	}

	public updateSelectedVersion(version: string) {
		this.setState({
			selectedVersion: this.versions.find(v => v.Version === version) || this.defaultVersion,
			anchorEl: null
		})
	}

	public renderVersions() {
		const mapFunction = (v, i) => {
			return (
				<MenuItem onClick={this.updateSelectedVersion.bind(this, v.Version)} key={v.Version + i}>
					{v.Version}
				</MenuItem>
			)
		}

		return this.versions.map(mapFunction)
	}

	public handleClick = event => {
		this.setState({ anchorEl: event.currentTarget })
	}

	public handleClose = () => {
		this.setState({ anchorEl: null })
	}

	public render() {
		const menuId = 'component-version-menu-' + this.props.component.Key
		const { anchorEl } = this.state

		return (
			<StyledCard>
				<StyledCardBody>
					<Typography variant="title">{this.state.selectedVersion.Name}</Typography>
					<TopSpacer />
					<Button
						color="primary"
						variant="raised"
						aria-owns={anchorEl ? menuId : undefined}
						aria-haspopup="true"
						onClick={this.handleClick.bind(this)}>
						{this.state.selectedVersion.Version}
					</Button>
					<Menu
						id={menuId}
						open={Boolean(anchorEl)}
						anchorEl={anchorEl}
						onClose={this.handleClose.bind(this)}>
						{this.renderVersions()}
					</Menu>
					<TopSpacer />
					<Typography variant="body1" className="mi-base-padding">
						{this.state.selectedVersion.Description}
					</Typography>
				</StyledCardBody>
				<StyledCardActions>
					<ComponentConsumers component={this.state.selectedVersion} />
					<ComponentDependencies component={this.state.selectedVersion} />
				</StyledCardActions>
			</StyledCard>
		)
	}
}

export default Component
