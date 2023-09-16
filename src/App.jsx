import { useRecoilState } from "recoil";
import { atom } from "recoil";
import { NavLink } from "react-router-dom";

const counter = atom({ key: "counteraa", default: 0 });

function App() {
  var [count, setCount] = useRecoilState(counter);
  const add = () => setCount((count = count + 1));
  return (
    <div className="m-24 text-center">
      <div className="text-center text-5xl">Hello world !</div>
      <div>
        SETUP
        <br /> REACT ROUTER (BROWSER ROUTER) <br /> RECOIL state management
        <br /> TAILWINDCSS
        <br /> PRETTIER <br />
        TAILWINDCS-PRETTIER-PLUGIN format tailwindcss <br /> PNPM <br /> SWC
        rust js compiler faster build
      </div>
      <button
        className="mt-5 cursor-pointer rounded-md border-2 p-2 text-5xl font-bold"
        onClick={add}
      >
        <span>count : {count}</span>
      </button>
      <NavLink to={"/pagetwo"} className={"block rounded border-2 p-4"}>
        Page Two
      </NavLink>
    </div>
  );
}

export default App;
