import "../styles/cards.css"
import Button from "../components/Button";


export default function Cards(props){
    const priceOffer = props.priceText ? "/month after offer period" : "/day";
    const termsText = props.terms? "1 month free not available for users who have already tried Premium." : ""
    return(
        <div className="card">
            <div>
                <div>
                    <div>{props.free}</div>
                    <div>one-time plans available</div>
                    <h2>{props.title}</h2>
                    <p>{props.price} {priceOffer}</p>
                    <p>{props.accounts} {props.accountText}</p>
                </div>
                <div>
                    <ul>
                        {props.features && props.features.map((feature) => <li>{feature}</li>)}
                    </ul>
                    <Button button="View Plans" type="start" />
                </div>
                <p className="terms">Terms and conditions apply.{termsText}</p>
            </div>
        </div>
    )
}