import "./App.css";
import HomePage from "./Pages/HomePage/HomePage.component";
import { Routes, Route } from "react-router-dom";
import Navigation from "./Components/Navigation/Navigation.component";
import HistoryPage from "./Pages/HistoryPage/HistoryPage.component";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Navigation />}>
                <Route index element={<HomePage />} />
                <Route path="history-page" element={<HistoryPage />} />
            </Route>
        </Routes>
    );
}

export default App;
