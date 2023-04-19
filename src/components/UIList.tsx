function UIList({list,callback}:{list: any[],callback:(elm:any)=>string}){
    return (
        <ul>
            {list.map((item, index) => (
                <li key={index}>{callback(item)}</li>
            ))}
        </ul>
    )
}

export default UIList;