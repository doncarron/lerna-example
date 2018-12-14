import { DialogContent, Typography } from '@material-ui/core'
import { DialogContentProps } from '@material-ui/core/DialogContent'
import { TypographyProps } from '@material-ui/core/Typography'
import styled, { StyledComponent } from 'react-emotion'
import { HTMLProps } from 'react'

export const StyledDialogContent: StyledComponent<DialogContentProps, any, {}> = styled<
	DialogContentProps,
	{}
>(DialogContent)`
	maxheight: 600px;
`

export const StyledDependencyEntry: StyledComponent<HTMLProps<HTMLDivElement>, any, {}> = styled(
	'div'
)`
	display: flex;
	flex: 1 0 auto;
	flex-direction: column;
`

export const StyledDependencyEntryVersion: StyledComponent<
	HTMLProps<HTMLDivElement>,
	any,
	{}
> = styled('div')`
	display: flex;
	flex: 1 0 auto;
	flex-direction: row;
`

export const StyledDependencyEntryVersionChild: StyledComponent<TypographyProps, any, {}> = styled(
	Typography
)`
	width: 280px;
`
