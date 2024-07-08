export function Page({objIconPro, objImgPro, objGifPro}) {

    const tg = objIconPro.tg,
           x =  objIconPro.x,
           ray = objIconPro.ray,
           dext = objIconPro.dext,
           dexs = objIconPro.dexs;

    const logo1 = objImgPro.logo1,
          logo2 = objImgPro.logo2,
          logo3 = objImgPro.logo3;

    const gif1 = objGifPro.gif1,
          gif2 = objGifPro.gif2,
          gif3 = objGifPro.gif3;

    return(
        <div>
            <header className="socialLink">
                <span>
                    <a href="https://t.me/kocoonsol" target="_blank"><img src={tg} alt="telegram link"></img></a>   
                </span>
                <span>
                    <a href="https://x.com/kocosolana" target="_blank"><img src={x} alt="twitter link"></img></a>
                </span>
                <span>
                    <a href="https://raydium.io/swap/" target="_blank"><img src={ray} alt="raydium buy link"></img></a>
                </span>
                <span>
                    <a href="https://www.dextools.io/app/" target="_blank"><img src={dext} alt="dextools link"></img></a>
                </span>
                <span>
                    <a href="https://dexscreener.com/" target="_blank"><img src={dexs} alt="dexscreener link"></img></a>
                </span>
            </header>
            <main className="bodySection">
                <div className="logoText">
                    <h2>Yo, Welcome to $KOCO's World!</h2>
                    <div>
                        <span>
                            <img src={logo1} alt="Koco official Logo"></img>
                        </span>
                    </div>
                    <h4>So calm and cute</h4>
                </div>
                <div className="caSection">
                    <div>
                        <h4>CA:</h4>
                        <p>0000000000000000000000000000000000000000000000</p>
                    </div>
                </div>
                <div className="aboutSection">
                    <div className="about">
                        <span>
                            <img src={logo2} alt="about pic"></img>
                        </span>
                        <h4>
                            Why did the koala invest in $Koco? 
                            Because it heard it was the bear market's best-kept secret! With $Koco, 
                            it's all about holding tight and enjoying the ride. When $Koco hits a new high, 
                            this koala will say, "Eucalyptus be kidding me!" And when $Koco goes to the moon, 
                            it'll plant a eucalyptus tree there!
                        </h4>
                        <span>
                            <img src={logo3} alt="about pic 2"></img>
                        </span>
                    </div>
                    <div className="buyButton">
                        <button>
                            Buy $KOCO
                        </button>
                    </div>
                </div>
                <div className="memeSection">
                    <h4>Everyone loves $KOCO. $KOCO is cute af.</h4>
                    <div className="memePic">
                        <span>
                            <img src={gif3} alt="koco first gif"></img>
                        </span>
                        <span>
                            <img src={gif2} alt="koco second gif"></img>
                        </span>
                    </div>
                </div>
            </main>
            <footer>
                <p>© 2024 KOCO. All rights reserved.</p>
            </footer>
        </div>
    );
}
