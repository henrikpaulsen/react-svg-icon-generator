/* eslint-disable no-alert */
import React from 'react';
import Icon from './Icon';

function App() {
    return (
        <div>
            <span>Simple possible usage</span>
            <Icon kind="clock" />

            <span>Setup color and bounding width and height</span>
            <Icon kind="close" color="#748" width={200} height={100} />

            <span>Setup color and bounding width and height to size (square)</span>
            <Icon kind="close" color="red" size={300} />

            <span>Setup onClick behavior</span>
            <Icon kind="close" onClick={() => alert('clicked on icon')} />

            <span>Show all icons with description (for finding right icon)</span>
            <Icon preview />
        </div>
    );
}

export default App;
