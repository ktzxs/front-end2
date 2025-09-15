import './colecoes.css'

import verao from '../../assets/verao.jpg'
import scarpins from '../../assets/scarpins.jpg'
import bolsas from '../../assets/bolsas.jpg'

export default function colecoes() {
    return (
        <section className='Colecoes'>
            <div className='titulos'>
                <h2>Coleções 2026</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centur
                </p>
                <button className='btn'>Comprar Agora</button>
            </div>

            <div className='grid-colecoes'>
                <div className='item'>
                    <img src={verao} alt='colecao verao'/>
                </div>

                <div className='item grande'>
                    <img src={bolsas} alt='colecao verao'/>
                </div>

                <div className='item'>
                    <img src={scarpins} alt='colecao verao'/>
                </div>
            </div>
        </section>
    )
}