function Offers() {
    const n = 12;
    return (
        <div className="Offers">
            <img src="https://assets-in.bmscdn.com/promotions/cms/creatives/1672922434273_bans.jpg" className="offer" alt="offer" />
            <div className="OfferCard">
                {
                    [...Array(n)].map((e, i) => <img src="https://in.bmscdn.com/offers/tncbanner/sbi-inr-500-off-on-signature-credit-card-sbi0613.jpg?21122022175815" alt="OfferCard" />)
                }
            </div>
        </div>
    )
}

export default Offers;