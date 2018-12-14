// @ts-ignore
import * as React from 'react'

import {
	Button,
	Dialog,
	DialogActions,
	DialogTitle,
	Icon,
	IconButton,
	Typography
} from '@material-ui/core'
import { TopSmallSpacer } from 'mi.ux.styles'
import { Trans, translate, TranslationFunction } from 'react-i18next'
import { ILibraryItem } from '@mitchell/ux.contracts'

import {
	StyledDependencyEntry,
	StyledDependencyEntryVersion,
	StyledDependencyEntryVersionChild,
	StyledDialogContent
} from './DependencyModal'

export interface IComponentConsumersProps {
	component: ILibraryItem
	t?: TranslationFunction
}

export interface IComponentConsumersState {
	isOpen: boolean
}

// @ts-ignore
@translate(['translation'])
export class ComponentConsumers extends React.Component<
	IComponentConsumersProps,
	IComponentConsumersState
> {
	constructor(props: IComponentConsumersProps) {
		super(props)

		this.state = {
			isOpen: false
		}
	}

	public handleClose = () => {
		this.setState({ isOpen: false })
	}

	public renderConsumers() {
		const delim = '|||'
		const elements = (this.props.component.Consumers || []).map(consumer => {
			return consumer.ConsumerName + delim + consumer.PackageVersion || 'unknown'
		})

		const mapFunction = consumer => {
			const name = consumer.split(delim)[0]
			const version = consumer.split(delim)[1]
			return (
				<StyledDependencyEntry key={name + version}>
					<Typography variant="body2">{name}</Typography>
					<StyledDependencyEntryVersion>
						<StyledDependencyEntryVersionChild variant="body1">
							<Trans>Dependency Version</Trans>:
						</StyledDependencyEntryVersionChild>
						<Typography variant="body1">{version}</Typography>
					</StyledDependencyEntryVersion>
					<br />
				</StyledDependencyEntry>
			)
		}

		const filteredElements = [...Array.from(new Set(elements))].map(mapFunction)

		return !this.props.component.Consumers || this.props.component.Consumers.length === 0 ? (
			<Typography variant="body1">
				<Trans>No consumers found for this component</Trans>
			</Typography>
		) : (
			filteredElements
		)
	}

	public renderDialog() {
		const name = this.props.component.Name

		return (
			<Dialog open={this.state.isOpen} onClose={evt => this.setState({ isOpen: false })}>
				<DialogTitle>
					<Trans>Consumer information for {{ name }}</Trans>
					<TopSmallSpacer />
					<Typography variant="subheading" component="div">
						{this.props.component.Name}
					</Typography>
					<TopSmallSpacer />
					<Typography variant="caption">
						{/* prettier-ignore */}
						<Trans>This list indicates what other components consume this component as well as what version they are consuming</Trans>
					</Typography>
				</DialogTitle>
				<StyledDialogContent>{this.renderConsumers()}</StyledDialogContent>
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
					<Icon>public</Icon>
				</IconButton>
				{this.renderDialog()}
			</div>
		)
	}
}
