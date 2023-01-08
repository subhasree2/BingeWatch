function Offers() {
    const n = 12;
    return (
        <div className="Gifts">
            {
                [...Array(n)].map((e, i) => <img src="https://in.bmscdn.com/gv/gift_my_show_02402022094010_480x295.jpg" alt="Gifts"/>)
            }
        </div>
    )
}

export default Offers;