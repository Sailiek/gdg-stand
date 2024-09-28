import './App.css';
import InputComponent from './InputComponent';
import ClickComponent from './ClickComponent';
import DescriptionComponent from './DescriptionComponent';
import ImageComponent from './ImageComponent';
import { HashRouter as Router, Route, Routes } from 'react-router-dom'; // Make sure Routes is imported
import HintComponent from './HintComponent';

function App() {
  return (
    <Router basename="/gdg-stand">
      <Routes>
        <Route path="/hint" element={<HintComponent />} /> 
        
        
          <>
            <ImageComponent />
            <DescriptionComponent />
            <ClickComponent />
            <InputComponent />
          </>
        
      </Routes>
    </Router>
  );
}

export default App;
