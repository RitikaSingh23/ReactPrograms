const ProductDesign=(props)=>{
    return(
        <>
        <tr>
            <td>{props.pid}</td>
            <td>{props.pname}</td>
            <td>{props.qty}</td>
        </tr>
        </>
    )
}
export default ProductDesign;