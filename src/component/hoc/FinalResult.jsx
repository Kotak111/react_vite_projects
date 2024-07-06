import React from 'react';
import UseCounter from './UseCounter';
import Counter from './Counter';
import UseCounter2 from './UseCounter2]';

function FinalResult(props) {
    return (
        <div>
            <UseCounter hoccamp={Counter}></UseCounter>
            <UseCounter2 hoccamp={Counter}></UseCounter2>
        </div>
    );
}

export default FinalResult;