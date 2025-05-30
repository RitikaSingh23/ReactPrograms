const EmpDesign=(props)=>{
    return(
        <>
        <tr>
            <td>{props.id}</td>
            <td>{props.name}</td>
            <td>{props.city}</td>
            <td>{props.age}</td>
            <td>{props.sal}</td>
        </tr>
        </>
    )
}
export default EmpDesign;