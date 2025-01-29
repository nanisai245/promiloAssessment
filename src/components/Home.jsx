import Welcome from "./sideBar/Welcome";
import Wallet from "./sideBar/Wallet";
import PendingActions from "./sideBar/PendingActions";
import FrequentlyUsed from "../components/mainSection/FrequentlyUsed";
import Branches from "../components/mainSection/Branches";

const Home = () => {
  return (
    <main>
      <aside>
        <Welcome />
        <Wallet />
        <PendingActions />
      </aside>
      <section>
        <FrequentlyUsed />
        <Branches />
      </section>
    </main>
  );
};

export default Home;
