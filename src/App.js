import Header from "./compotents/Header";
import Footer from "./compotents/Footer";
import Shop from "./compotents/Shop";
import { ContextProvider } from "./context";

function App() {
    return (
        <>
            <Header />
            <ContextProvider>
                <Shop />
            </ContextProvider>
            <Footer />
        </>
    );
}

export default App;
