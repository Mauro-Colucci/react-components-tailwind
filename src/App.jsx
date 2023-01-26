import Sidenav from "./components/Sidenav";

function App() {
  return (
    <div className="flex">
      <Sidenav />
      <div className="p-7">
        <h1 className="text-2xl font-semibold">Home Page</h1>
      </div>
    </div>
  );
}

export default App;
