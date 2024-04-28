import { RootRoutes } from "./routes";
import Provider from "./providers";

function App() {
    return (
        <Provider>
            <RootRoutes />
        </Provider>
    );
}

export default App;
