import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Screen from "./Screen/Screen";

function App() {
  return (
    <div className="App">
        <Router>
            <Routes>
             <Route
            path="/StickyNotes"
            element={
                <>
                    <Screen/>
                </>
            }>
            </Route>
                </Routes>
        </Router>

    </div>

  );
}

export default App;
