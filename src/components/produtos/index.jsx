import './Produto.css'

import bolsa from '../../assets/bolsa.png'
import note from '../../assets/portaNotebook.png'
import sandalia1 from '../../assets/sandalia1.png'
import sandalia2 from '../../assets/sandalia2.png'
import tamanco from '../../assets/tamanco.png'
import tenis from '../../assets/tenis.png'

export default function Produto() {
    return (
        <section className='produtos'>
            <div className='titulos'>
                <h2>novidades</h2>
                <p>lorem ipsum dolor sit, amet consectetur adipiscing elit. Inventore culpa modi illo architecto maxime accusantiun Inventore culpa modi illo architecto maxime accusantiun
                </p>

                <div className="produtos_grid">
                    <div className='card'>
                        <div className='card-image'>
                            <img src={sandalia1} alt="sandalia"/>
                            <span className='badge-venda'>Mais vendido</span>
                        </div>

                        <div className='card-info'>
                            <h3>sandalia de Couro</h3>
                            <p className='preço'>R$ 349,90</p>
                            <button className='btn'>Comprar agora</button>
                        </div>
                    </div>

                    <div className='card'>
                        <div className='card-image'>
                            <img src={sandalia2} alt="sandalia"/>
                        </div>

                        <div className='card-info'>
                            <h3>sandalia</h3>
                            <p className='preço'>R$ 229,90</p>
                            <button className='btn'>Comprar agora</button>
                        </div>
                    </div>

                    <div className='card'>
                        <div className='card-image'>
                            <img src={tamanco} alt="Tamanco"/>
                            <span className='badge-desconto'>-10%</span>
                        </div>

                        <div className='card-info'>
                            <h3>tamanco Couro</h3>
                            <p className='preço'>R$ 369,90</p>
                            <button className='btn'>Comprar agora</button>
                        </div>
                    </div>

                    <div className='card'>
                        <div className='card-image'>
                            <img src={bolsa} alt="Tamanco"/>
                            <span className='badge-desconto'>-10%</span>
                        </div>

                        <div className='card-info'>
                            <h3>Bolsa Shopper</h3>
                            <p className='preço'>R$ 269,90</p>
                            <button className='btn'>Comprar agora</button>
                        </div>
                    </div>

                    <div className='card'>
                        <div className='card-image'>
                            <img src={note} alt="Tamanco"/>
                            <span className='badge-desconto'>-10%</span>
                        </div>

                        <div className='card-info'>
                            <h3>Porta Notebook</h3>
                            <p className='preço'>R$ 269,90</p>
                            <button className='btn'>Comprar agora</button>
                        </div>
                    </div>

                    <div className='card'>
                        <div className='card-image'>
                            <img src={tenis} alt="Tamanco"/>
                            <span className='badge-venda'>Mais vendido</span>
                        </div>

                        <div className='card-info'>
                            <h3>Tênis Couro</h3>
                            <p className='preço'>R$ 169,90</p>
                            <button className='btn'>Comprar agora</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}