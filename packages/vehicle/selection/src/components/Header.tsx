import styled from 'react-emotion'
import * as React from 'react'

import { Typography } from '@material-ui/core'
import { Trans } from 'react-i18next'
import logo from '../images/logo'

/**
 * Styles
 */

const styledHeaderHeight = 130

const Logo = styled('div')`
	background-image: ${logo};
	background-repeat: no-repeat;
	width: 170px;
	height: 130px;
`

const StyledHeader = styled('div')`
	display: flex;
	flex: 1 0 auto;
	height: ${styledHeaderHeight}px;
	max-height: ${styledHeaderHeight}px;
	min-height: ${styledHeaderHeight}px;
	flex-direction: row;
	align-items: flex-end;
`

const StyledHeaderTypography = styled(Typography)`
	font-style: italic;
	font-size: 40px;
`

/**
 * End Styles
 */
export class Header extends React.Component {
	public render() {
		return (
			<StyledHeader>
				<Logo />
				<StyledHeaderTypography variant="display1">
					<Trans>librarian</Trans>
				</StyledHeaderTypography>
			</StyledHeader>
		)
	}
}

export default Header
