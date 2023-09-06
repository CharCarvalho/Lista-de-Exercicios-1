import { useParams } from "react-router-dom";

export default function EditarProdutos() {
  document.title = "Editar Produtos";

  const {id} = useParams();

  return (
    <>
    <div>EditarProdutos</div>
    <p>Produto Selecionado : {id} </p>
    </>
    
  )
}