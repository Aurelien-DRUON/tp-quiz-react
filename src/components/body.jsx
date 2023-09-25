import { useState } from "react";
import Index from "./index";
import Quiz from "./quiz";

function Body() {

    const [body, setBody] = useState(
        <div>
            <Index />
            <button onClick={() => setBody(
                <div>
                    <Quiz />
                </div>
            )}>Démarrer</button>
        </div>
    )

    return (
        <div>
            {body}
        </div>
    )
}

export default Body