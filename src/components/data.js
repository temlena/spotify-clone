import upi from "../assets/upi.png";
import payTm from "../assets/paytm.png";
import visa from "../assets/visa.png";
import masterCard from "../assets/mastercard.png";
import amex from "../assets/amex.png";
import dinersClub from "../assets/diners.png";

export const paymentIcons = [
    {
        icon: upi
    },
    {
        icon: payTm
    },
    {
        icon: visa
    },
    {
        icon: masterCard
    },
    {
        icon: amex
    },
    {
        icon: dinersClub
    }
]
    

export const pricingList = [
    {
        title: "Mini",
        free: null,
        price: "₹7",
        priceText: false,
        accounts: 1,
        accountsText: "account on mobile only",
        features: [
            "Ad-free music listening on mobile",
            "Group Session",
            "Download 30 songs on 1 mobile device"
        ],
        terms: false
    },
    {
        title: "Individual",
        free: null,
        price: "₹119",
        priceText: true,
        accounts: 1,
        accountsText: "account",
        features: [
            "Ad-free music listening",
            "Group Session",
            "Download 10k songs/device on 5 devices"
        ],
        terms: true
    },
    {
        title: "Duo",
        free: "not free",
        price: "₹149",
        priceText: true,
        accounts: 2,
        accountsText: "accounts",
        features: [
            "For couples who live together",
            "Ad-free music listening",
            "Group Session",
            "Download 10k songs/device, on 5 devices per account"
        ],
        terms: true
    },
    {
        title: "Family",
        free: null,
        price: "₹179",
        priceText: true,
        accounts: 6,
        accountsText: "accounts",
        features: [
            "For family who live together",
            "Block explicit music",
            "Ad-free music listening",
            "Group Session",
            "Download 10k songs/device on 5 devices"
        ],
        terms: true
    }

]
