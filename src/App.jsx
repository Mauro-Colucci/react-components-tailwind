import Sidenav from "./components/Sidenav";

function App() {
  return (
    <div className="flex">
      <Sidenav />
      <div className="p-7">
        <div className="card w-96 bg-base-100 shadow-xl image-full">
          <figure>
            <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
