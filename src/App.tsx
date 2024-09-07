import React, { Suspense, useState } from "react";
import FilterComponent from "./components/FilterComponent";
import FormComponent from "./components/FormComponent";

const HeavyComponent = React.lazy(() => import("./components/HeavyComponent"));

const App: React.FC = () => {
  const [showComponent, setShowComponent] = useState(false);

  return (
    <div>
      <h1>React Lazy Loading and Transitions Example</h1>

      <button onClick={() => setShowComponent(true)}>
        Load Heavy Component
      </button>
      {showComponent && (
        <Suspense fallback={<div>Loading...</div>}>
          <HeavyComponent />
        </Suspense>
      )}

      <FilterComponent data={["Cat", "Dog", "Parrot", "Hamster", "Fish"]} />

      <FormComponent />
    </div>
  );
};

export default App;
