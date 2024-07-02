import { Provider } from "react-redux";
import { store } from '../store/store'; // Adjust the import as per your file structure

const MyApp = ({ Component, pageProps }) => {
    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    );
};

export default MyApp;
