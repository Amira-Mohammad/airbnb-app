import BeachFront from "../../Icons/BeachFront";
import Camping from "../../Icons/Camping";
import Castles from "../../Icons/Castles";
import Desret from "../../Icons/Desret";
import Farms from "../../Icons/Farms";
import Islands from "../../Icons/Islands";
import Kitchen from "../../Icons/Kitchen";
import Logo from "../../Icons/Logo";
import Luxe from "../../Icons/Luxe";
import Mansions from "../../Icons/Mansions";
import Pools from "../../Icons/Pools";
import Skiing from "../../Icons/Skiing";
import Surfing from "../../Icons/Surfing";
import Tiny from "../../Icons/Tiny";
import TreeHouse from "../../Icons/TreeHouse";
import Views from "../../Icons/Views";
import Vine from "../../Icons/Vine";
import "./SideBar.css";

function Sidebar() {
  return (
    <div className="SideBar d-flex flex-column h-100">
      <div className="d-flex  my-3 py-2  active">
        <Logo color="#121212" height={20} width={20} margin="ml-30" />
        <span class="mx-2">Home</span>
      </div>

      <div className="d-flex  my-3 py-2 ">
        <Views />
        <span class="mx-2"> Amazing Views</span>
      </div>
      <div className="d-flex  my-3 py-2 ">
        <Tiny />
        <span class="mx-2"> Tiny Homes</span>
      </div>

      <div className="d-flex  my-3 py-2 ">
        <Kitchen />
        <span class="mx-2"> Chef's Kitchen</span>
      </div>
      <div className="d-flex  my-3 py-2 ">
        <Surfing />
        <span class="mx-2"> Surfing</span>
      </div>
      <div className="d-flex  my-3 py-2 ">
        <Mansions />
        <span class="mx-2"> Mansions</span>
      </div>
      <div className="d-flex  my-3 py-2 ">
        <Luxe />
        <span class="mx-2"> Luxe</span>
      </div>
      <div className="d-flex  my-3 py-2 ">
        <TreeHouse />
        <span class="mx-2"> Treehouses</span>
      </div>
      <div className="d-flex  my-3 py-2 ">
        <Camping />
        <span class="mx-2"> Camping</span>
      </div>
      <div className="d-flex  my-3 py-2 ">
        <BeachFront />
        <span class="mx-2"> Beachfront</span>
      </div>
      <div className="d-flex  my-3 py-2 ">
        <Farms />
        <span class="mx-2"> Farms</span>
      </div>
      <div className="d-flex  my-3 py-2 ">
        <Castles />
        <span class="mx-2"> Castles</span>
      </div>
      <div className="d-flex  my-3 py-2 ">
        <Islands />
        <span class="mx-2"> Islands</span>
      </div>
      <div className="d-flex  my-3 py-2 ">
        <Vine />
        <span class="mx-2"> Vineyards</span>
      </div>
      <div className="d-flex  my-3 py-2 ">
        <Pools />
        <span class="mx-2"> Amazing Pools</span>
      </div>
      <div className="d-flex  my-3 py-2 ">
        <Skiing />
        <span class="mx-2"> Skiing</span>
      </div>
      <div className="d-flex  my-3 py-2 ">
        <Desret />
        <span class="mx-2"> Desert</span>
      </div>
    </div>
  );
}

export default Sidebar;
