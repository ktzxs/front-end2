import banner from '../../assets/banner.jpg'
import bannerMobile from '../../assets/banner_mobile.jpg'

import './capa.css'

export default function capa() {
    const isMobile = window.innerWidth <= 768;
    return (
        <section
          className='secao_capa'
          style={{
            backgroundImage: `url(${isMobile ? bannerMobile : banner})`,
          }}  
        >

            <div className='texto'>
                <h2>Preview</h2>
                <h1>VERÃO</h1>
                <button className='btn'>Comprar Agora</button>
            </div>
        </section> 
    )
}


