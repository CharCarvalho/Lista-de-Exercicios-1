import { Link } from "react-router-dom";

export default function Error(){

  return(
      <>
      <div>
          <h1>Erro 404 - Página Não Encontrada</h1>
          <p><Link to="/">Voltar para a página inicial.</Link></p>
      </div>    
      </>
          
      
  )

}