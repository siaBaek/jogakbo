import { BrowserView, MobileView } from "react-device-detect";
import BrowserHome from "./BrowserHome";
import MobileHome from "./MobileHome";

function Home() {
  return (
    <>
      <BrowserView>
        <BrowserHome />
      </BrowserView>
      <MobileView>
        <MobileHome />
      </MobileView>
    </>
  );
}
export default Home;
