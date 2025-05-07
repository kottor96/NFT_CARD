export function Card(titre,p,img1,nbr1,nbr2,img2,nom) {
    return(
        <>
            <div className="card">
                <div className="card_header"><div className="img"><img src={img1} alt="truc" /></div></div>
                <div className="card_body">
                    <h3>{titre}</h3>
                    <p>{p}</p>
                    <div>
                        <ul>
                            <li>{nbr1} ETH</li>
                            <li>{nbr2} days left</li>
                        </ul>
                    </div>
                </div>
                <hr />
                <div className="card_footer">
                    <div><img src={img2} alt="" /></div>
                    <p>Creation of <span>{nom}</span></p>
                </div>
            </div>
        </>
    )
}