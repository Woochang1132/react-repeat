import { useContext } from 'react';
import { DarkMdoeContext, DarkModeProvider } from './context/DarkModeContext';

export default function AppTheme() {
    return (
        <div>
            <DarkModeProvider>
            <Header/>
            <Main/>
            </DarkModeProvider>
        </div>
    );
}

function Header(){
    return <header className='header'>Header</header>
}

function Main(){
    return(
        <main className='main'>
            Main
            <Profile/>
            <Products/>
        </main>
    )
}

function Profile(){
    return(
        <div>
            Profile
            <User/>
        </div>
    )
}

function User(){
    return <div>
        User
    </div>
}

function Products(){
    return(
        <div>
            Products
            <ProductDetail/>
        </div>
    )
}

function ProductDetail(){
    const {darkMode, toggleDarkMode} = useContext(DarkMdoeContext); 
    return (
        <div>
            ProductDetail
            <p>
                DarkMode:
                {
                    darkMode ? (<span style={{backgroundColor: 'black', color: 'white'}}>Dark Mode</span>)

                    : (<span>Light mode</span>)
                }
            </p>
            <button onClick={() => toggleDarkMode()}>Toggle</button>
        </div>
    )
}

