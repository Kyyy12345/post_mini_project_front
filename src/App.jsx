import MainLayout from "./components/common/MainLayout";
import AuthRoute from "./routes/AuthRoute";

function App() {
    return <MainLayout>
        <AuthRoute></AuthRoute>
    </MainLayout>
}

export default App;