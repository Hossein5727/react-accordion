import AccordionList from "./components/AccordionList";
import { accordionList } from "./data/index";

function App() {
  return (
    <div className="bg-zinc-300 min-h-screen w-screen">
      <AccordionList mode="single" items={accordionList} defaultOpenId={1} />
    </div>
  );
}

export default App;
