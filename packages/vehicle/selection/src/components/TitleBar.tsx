import { AppBar, TextField, Toolbar } from '@material-ui/core'
import styled from 'react-emotion'
import { Colors } from 'mi.ux.styles'
import * as React from 'react'
import { translate, TranslationFunction } from 'react-i18next'

export interface IComponentDependenciesProps {
	handleChange: Function
	t?: TranslationFunction
}

export interface IComponentDependenciesState {
	value: string
}

/**
 * Styles
 */

const StyledTextField = styled(TextField)`
	height: inherit;
	width: 100%;
	input {
		color: ${Colors.mocha['01']};
	}
`

const StyledToolbarSection = styled('div')`
	width: 100%;
`

/**
 * End Styles
 */

// @ts-ignore
@translate(['translation'])
export class TitleBar extends React.Component<
	IComponentDependenciesProps,
	IComponentDependenciesState
> {
	constructor(props: IComponentDependenciesProps) {
		super(props)

		this.state = {
			value: ''
		}

		this.handleChange = this.debounce(this.handleChange.bind(this), 300)
	}

	public debounce(fn, delay) {
		let timerId: number
		return function() {
			const context: any = this,
				args = arguments
			clearTimeout(timerId)
			timerId = setTimeout(function() {
				fn.apply(context, args)
			}, delay)
		}
	}

	public updateInput(event: React.FormEvent<HTMLInputElement>) {
		this.setState({
			value: event.currentTarget.value
		})

		this.handleChange(event.currentTarget.value)
	}

	public handleChange(value: string) {
		this.props.handleChange(value)
	}

	public render() {
		return (
			<AppBar position="static">
				<Toolbar>
					<StyledToolbarSection>
						<StyledTextField
							onChange={this.updateInput.bind(this)}
							value={this.state.value}
							label={this.props.t!('Filter components') + '...'}
						/>
					</StyledToolbarSection>
				</Toolbar>
			</AppBar>
		)
	}
}
