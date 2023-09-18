import { useEffect, useState } from "react";

function TimerUp({ max }) {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        if (counter < 60) {
            setTimeout(() => setCounter(counter + 1), 1000);
        }
    }, [counter]);

    return (
        <span id="quetimeup">
            {counter}
        </span>
    )
}

export default TimerUp;
