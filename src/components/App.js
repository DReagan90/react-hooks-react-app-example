import React from "react";
import { format } from "date-fns";
import ExampleComponent from "./ExampleComponent";

const App = () => {
  return (
    <div>
      <header>Now</header> {/* Key for test 1 */}
      <ExampleComponent />  {/* Key for test 2 */}
      <TestComponent />     {/* Key for test 3 */}
    </div>
  );
};
// Add your code own within the return statement
function App() {
  return (
    <div className="App">
      <h1>Now</h1>
<TestComponent title="time video" />

      <p className="App-intro">
        In React apps, we write JSX - it looks like HTML, and uses a lot of HTML
        syntax. JSX lets us include JavaScript functions right along with the
        HTML, and also allows us to add in components, which are separate,
        self-contained chunks of JSX.
      </p>
      <ExampleComponent />
    </div>
    
  );
}

export default App;
