import { createContext, useState } from 'react';

export const DarkMdoeContext = createContext();

// data를 잘 가지고, 범위를 가지고 있는 우산으로 생각
// children => 외부로 부터 받아 온 자식

export function DarkModeProvider({children}){
    const [darkMode, setDarkMode] = useState(false);
    const toggleDarkMode = () => setDarkMode((mode) => !mode);

    return <DarkMdoeContext.Provider value={{darkMode, toggleDarkMode}}>
            {children}
    </DarkMdoeContext.Provider>

}