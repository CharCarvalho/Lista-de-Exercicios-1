import { ListaProdutos } from "../../components/ListaProdutos";
import { Link } from "react-router-dom"


export default function Produtos(){

    return(
        <main>
            <h1>Produtos</h1>
            {ListaProdutos.map(prod => (
                <div key={prod.id}>
                    <Link className="produto" to={`/produtos/editar/${prod.id}`}>
                        Editar o Produto: {prod.nome}
                    </Link>
                </div>
            ))}

      
        </main>
    )

}