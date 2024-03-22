import Button from "../components/Button";
import "../styles/hero.css";
export default function GetPremium() {
  return (
    <div className="hero">
      <h1>Get Premium free for 1 month</h1>
      <h2>
        Just ₹119/month after. Debit and credit cards accepted. Cancel anytime.
      </h2>
      <div className="">
        <Button button="GET STARTED" type="start" />
        <Button button="SEE OTHER PLANS" type="other" />
      </div>
      <p>
        <a href="#/">Terms and conditions apply.</a>1 month free not available
        for users who have already tried Premium.
      </p>
    </div>
  );
};

