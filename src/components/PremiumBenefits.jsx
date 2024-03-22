import { Premium } from "../components/PremiumList";
import CardImg1 from "../assets/ad-free-music.svg";
import CardImg2 from "../assets/offline-plaback.svg";
import CardImg3 from "../assets/play-everywhere.svg";
import CardImg4 from "../assets/pay-your-way.svg";
import "../styles/premiumbenefit.css";

export default function PremiumBenefits() {
  return (
    <section className="premium-benefits">
      <h2>The power of Premium</h2>
      <div className="benefit-card">
      <Premium  src={CardImg1} name="Ad free music listening" desc="Enjoy uninterrupted music"/>
      <Premium  src={CardImg2}name="Offline playback" desc="Save your data by listening offline"/>
      <Premium  src={CardImg3} name="Play everywhere" desc="Listen on your speakers, TV, and other favorite devices."/>
      <Premium  src={CardImg4} name="Pay your way" desc="Prepay with Paytm, UPI, and more."/>
      </div>
    </section>
  );
}
