import * as React from 'react'

import { TopSmallSpacer } from 'mi.ux.styles'
import { Trans, translate, TranslationFunction } from 'react-i18next'
import { ILibraryItem } from  '@mitchell/ux.contracts'

import {
	Button,
	Dialog,
	DialogActions,
	DialogTitle,
	Icon,
	IconButton,
	Typography
} from '@material-ui/core'

import {
	StyledDependencyEntry,
	StyledDependencyEntryVersion,
	StyledDependencyEntryVersionChild,
	StyledDialogContent
} from './DependencyModal'

export interface IComponentDependenciesProps {
	component: ILibraryItem
	t?: TranslationFunction
}

export interface IComponentDependenciesState {
	isOpen: boolean
}

// @ts-ignore
@translate(['translation'])
export class ComponentDependencies extends React.Component<
	IComponentDependenciesProps,
	IComponentDependenciesState
> {
	constructor(props: IComponentDependenciesProps) {
		super(props)

		this.state = {
			isOpen: false
		}
	}

	public handleClose = () => {
		this.setState({ isOpen: false })
	}

	public renderDependencies() {
		return !this.props.component.Dependencies || this.props.component.Dependencies.length === 0 ? (
			<Typography variant="body1">
				<Trans>No dependencies found for this component</Trans>
			</Typography>
		) : (
			(this.props.component.Dependencies || []).map(consumer => {
				return (
					<StyledDependencyEntry key={consumer.PackageName}>
						<Typography variant="body2">{consumer.PackageName}</Typography>
						<StyledDependencyEntryVersion>
							<StyledDependencyEntryVersionChild variant="body1">
								<Trans>Dependency Version</Trans>:
							</StyledDependencyEntryVersionChild>
							<Typography variant="body1">{consumer.DependencyVersion}</Typography>
						</StyledDependencyEntryVersion>
						<StyledDependencyEntryVersion>
							<StyledDependencyEntryVersionChild variant="body1">
								<Trans>Locked Version</Trans>:
							</StyledDependencyEntryVersionChild>
							<Typography
								variant="body1"
								style={{
									color:
										consumer.LatestVersion === consumer.LockedVersion || !consumer.LatestVersion
											? 'green'
											: 'red'
								}}>
								{consumer.LockedVersion || 'unknown'}
							</Typography>
						</StyledDependencyEntryVersion>
						<StyledDependencyEntryVersion>
							<StyledDependencyEntryVersionChild variant="body1">
								<Trans>Latest Version</Trans>:
							</StyledDependencyEntryVersionChild>
							<Typography variant="body1">{consumer.LatestVersion || 'unknown'}</Typography>
						</StyledDependencyEntryVersion>
						<br />
					</StyledDependencyEntry>
				)
			})
		)
	}

	public renderDialog() {
		const name = this.props.component.Name

		return (
			<Dialog open={this.state.isOpen} onClose={evt => this.setState({ isOpen: false })}>
				<DialogTitle>
					<Trans>Dependency information for {{ name }}</Trans>
					<TopSmallSpacer />
					<Typography variant="caption">
						{/* prettier-ignore */}
						<Trans>This list indicates what dependencies are currently in use by the selected component</Trans>
					</Typography>
				</DialogTitle>
				<StyledDialogContent>{this.renderDependencies()}</StyledDialogContent>
				<DialogActions>
					<Button onClick={this.handleClose} color="primary">
						<Trans>Done</Trans>
					</Button>
				</DialogActions>
			</Dialog>
		)
	}

	public render() {
		return (
			<div>
				<IconButton color="primary" onClick={evt => this.setState({ isOpen: true })}>
					<Icon>list</Icon>
				</IconButton>
				{this.renderDialog()}
			</div>
		)
	}
}
