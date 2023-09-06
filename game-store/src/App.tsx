import MainComponent from "./components/MainComponent";
import Navbar from "./components/Navbar";



function MainApp() {
  return (
    <>
      <div className="container-fluid text-center my-0 mx-0 py-0 px-0">
        <div className="row my-0 mx-0 py-0 px-0">
          <Navbar />
        </div>
        <div className="row my-0 mx-0 py-0 px-0">
         <MainComponent/>
        </div>
      </div>
    </>
  );
}

export default MainApp;
