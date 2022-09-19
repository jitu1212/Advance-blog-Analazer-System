
import './App.css';
import FormText from './Componets/FormText';
import Navbar from './Componets/Navbar';
import './index.css'



function App() {
  
  return (
    <>
    <div className="body">
    <Navbar
    title="TEXT-TODO"
    home="Home"
    about="About"
     />
      <details>
    1:if you want to change Your text is uppercase then simple click uppercase button <br />
    2:if you want to change Your text is Lowercase then simple click Lowercase button <br />
    3:if you want to change Your text is clear then simple click uppercase button <br />
    4:if you want to change Your text is uppercase then simple click uppercase button
  </details>
     <div className="container">
     <FormText heading="Text Analysis"
      
     />
     </div>
     </div>
      
    </>
  );
}
export default App;
