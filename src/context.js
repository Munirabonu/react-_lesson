import React,{ useState ,createContext} from "react";
import { data } from "./config";

export const ContextHook = createContext();

export const ContextContainer = ({ children }) => {
    
    const [mocks, setMocks] = useState(data)

    return (
        <div>
            <ContextHook.Provider value={[mocks, setMocks]}>
                {children}
            </ContextHook.Provider>
        </div>
    )
}

export default ContextContainer