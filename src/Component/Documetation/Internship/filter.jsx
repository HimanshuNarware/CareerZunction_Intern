export function Filter({options, setOption,defaultvalue, option}){

    function handleFilter(){
        setOption(option)
    }

    function handleChange(){

    }

    return(
        <div>
            <select onClick={handleFilter} value={option} onChange={(e)=> setOption(e.target.value)}>
                {options.map((item)=>(
                    <option defaultValue={defaultvalue} value={item}>
                        {item}
                    </option>
                ))}
            </select>
        </div>
    )
}