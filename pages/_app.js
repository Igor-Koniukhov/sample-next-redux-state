import '../styles/globals.css';
import {wrapper} from "../store/store";
import {Provider} from "react-redux";

function MyApp({Component, ...rest}) {
    const {store, props} = wrapper.useWrappedStore(rest)
    const {pageProps} = props;

    return (
        <Provider store={store}>
            <Component {...pageProps} />
        </Provider>
    )

}

export default MyApp
