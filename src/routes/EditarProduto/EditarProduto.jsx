import { useParams } from "react-router-dom";
import { ListaProdutos } from "../../components/ListaProdutos";



export default function EditarProduto(){
    const { id } = useParams();
    const lista = ListaProdutos
    
    const proc = lista.find(prod => prod.id === id)
    const produto = proc[0];
    
    /* const navigate = useNavigate(); */

    /* const salvar = () =>{
        alert(`Produto: ${produto.nome} editado com sucesso!`)
        return navigate('/produtos');
    }; */

    return(
        <>
        
        <main>
            <h1>Visualizando o produto {produto.nome}</h1>
            <p>
                <strong>{produto.nome}</strong>
            </p>
            <p>{produto.desc}</p>
            <p>
                {produto.preco}
            </p>
        </main>
       
        </>
    );


}