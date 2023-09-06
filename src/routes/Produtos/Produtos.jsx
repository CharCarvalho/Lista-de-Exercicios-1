import { ListaProdutos } from "../../components/ListaProdutos";
import { Link } from "react-router-dom"


export default function Produtos(){

    return(
        <main>
            <h1>Produtos</h1>
            <div>
                <table>
                    <tr>
                        <th>ID</th>
                        <th>NOME</th>
                        {/* <th>DESCRIÇÃO</th>
                        <th>IMAGEM</th> */}
                        <th>PREÇO</th>
                        <th>EDITAR/EXCLUIR</th>              
                    </tr>
                        {ListaProdutos.map((item, indice)=>(
                        <tr key={indice}>
                            <td>{item.id}</td>
                            <td>{item.nome}</td>
                            {/* <td>{item.desc}</td> */}
                            {/* <td><img src={`${item.img}`} alt={`$item.desc`}/></td> */}
                            <td>{item.preco}</td>
                            <td> <Link to={`/editar/produtos/${item.id}`}> Editar o produto: {item.nome}  </Link> / 
                            <Link to={`/excluir/produtos/${item.id}`}> Excluir </Link>
                            </td>
                        </tr>
                        ))}
                </table>

      </div>
        </main>
    )

}