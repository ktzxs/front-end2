import './topo.css'

export default function Topo() {
    return (
        <header>
            <div className='anuncio'>
                <div className='anuncio-conteudo'>
                <p>6x sem juros a partir de R$599,00</p>
                </div>
            </div>

            <div className="topo">
                <picture>
                    <a href='#'>
                        <img src='./logoLoja.png' alt='Logo da loja' />
                    </a>
                </picture>
                
                <nav>
                    <a href='#'>Produtos</a>
                    <a href='#'>Lançamentos</a>
                    <a href='#'>Contatos</a>
                </nav>
            </div>
        </header>
    )          
}