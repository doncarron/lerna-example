import styled from 'react-emotion'
import * as React from 'react'

import { Grid } from '@material-ui/core'
import { Component } from '@mitchell/estimating.parts.categories'

/**
 * Styles
 */

const spacing = 24

const StyleGridWrapper = styled('div')`
	padding: 0 ${spacing / 2}px;
	display: flex;
	height: 100%;
`

const StyledGrid = styled(Grid)`
	display: flex;
	flex: 1 0 auto;
	overflow-y: auto;
	flex-wrap: wrap;
	flex-direction: row;
	height: 100%;
`

/**
 * End Styles
 */
export const ComponentList = ({ components }) => {
	return (
		<StyleGridWrapper>
			<StyledGrid container spacing={spacing} style={{ margin: '0 ' + -spacing / 2 + 'px' }}>
				{components.map(component => {
					return (
						<Grid key={component.Key} item sm={12} md={6} xl={3} lg={4}>
							<Component key={component.Key} component={component} />
						</Grid>
					)
				})}
			</StyledGrid>
		</StyleGridWrapper>
	)
}

export default ComponentList
