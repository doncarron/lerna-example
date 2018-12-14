import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { MitchellMath } from '../src/services/example';


let first = 1;
let second = 1;

storiesOf('Math Thing', module)
    .add('verify it maths correctly', () => {

        let addNumbers = (first: number, second: number) => {
            let ret = MitchellMath.Add(first, second);   
            action()(ret);
        } 

        return (
            <div>
                <label htmlFor="first">First number</label>
                <br />
                <input id="first" type="number" defaultValue={first.toString()} onChange={(evt) => { first = parseInt(evt.target.value); }} />
                <br />
                <br />
                <label htmlFor="second">Second number</label>
                <br />
                <input id="second" type="number" defaultValue={second.toString()} onChange={(evt) => { second = parseInt(evt.target.value); }} />
                <br />
                <br />
                <button onClick={() => addNumbers(first, second)}>Add!</button>
            </div>
        )
    });