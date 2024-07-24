export function Filter({options, setOption}){
    return(
        <div>
            <select onChange={(e)=> setOption(e.target.value)}>
                <option value="">All</option>
                {options.map((item)=>(
                    <option value={item}>
                        {item}
                    </option>
                ))}
            </select>
        </div>
    )
}