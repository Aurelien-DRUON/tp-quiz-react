import { useState } from "react";
import Index from "./components/index";

function Body() {

    const [body, setBody] = useState(
        <div>
            <Index />
            <button onClick={() => setBody(
                <div></div>
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