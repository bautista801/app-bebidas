import useBebidas from "../hooks/useBebidas"
import Bebida from "./Bebida"

const ListadoBebidas = () => {

    const {bebidas} = useBebidas()

  return (
    <div className="row mt-5">
        {
            bebidas.map(bebida => (
                <Bebida 
                    key={bebida.idDrink}
                    bebida={bebida} />
            ))
        }
    </div>
  )
}

export default ListadoBebidas