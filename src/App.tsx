import AccordionList from "./components/AccordionList";
import { accordionList } from "./data";

function App() {
  return (
    <div className="bg-zinc-300 min-h-screen w-screen">
      <AccordionList mode="single" items={accordionList}/>
    </div>
  );
}

export default App;
