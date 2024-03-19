import { createContext, useState } from "react";

export const Context = createContext();

export const AppContext = () => {
    const [imagesearch, setImageSearch] = useState(false);

    return (
        <Context.Provider>
             
        </Context.Provider>
    );
};
