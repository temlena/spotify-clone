import "../styles/plans.css";
import Button from "../components/Button";
import Cards from "../components/cards";
import { paymentIcons, pricingList } from './data.js';
export default function Plans(){
    const renderPaymentIcons = (payment) => {
        if (payment.icon) {
            return <img src= {payment.icon} alt="payment-icon" />;
        } else {
            return null;
        }

    }
    return(
        <div className="plans">
            <h2 className="planTitle">Pick your Premium</h2>
            <p className="planDesc">Listen without limits on your phone, speaker, and other devices.</p>
            <div className="icons">
                {
                    paymentIcons.map(renderPaymentIcons)
                }
            </div>
            <div className="cards">
               {
                    pricingList.map((list) => {
                        return <Cards title={list.title} free={list.free} price={list.price} priceText={list.priceText} accounts={list.accounts} accountsText={list.accountsText} features={list.features} terms={list.terms} />
                    })
               }
            </div>
            <div className="details">
                <p className= "detailsText">Special discount for eligible students in university</p>
                <Button button="LEARN MORE" type="start" />
            </div>
        </div>
    )
}