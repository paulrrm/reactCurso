const tipOptions = [
    {
        id: 'tip-10',
        value: .10,
        label: '10%'
    },
    {
        id: 'tip-20',
        value: .20,
        label: '20%'
    },
    {
        id: 'tip-50',
        value: .50,
        label: '50%'
    },
]

type TipProps = {
    settip: React.Dispatch<React.SetStateAction<number>>,
    tip:number
}
function TipPorcent({settip,tip}:TipProps) {
    return (
        <div>
            <h3 className="font-black text-2xl">Propina:</h3>
            <form action="">
                {tipOptions.map(tipOptions => (
                    <div key={tipOptions.id} className="flex gap-2">
                        <label htmlFor={tipOptions.id}>{tipOptions.label}</label>
                        <input
                            id={tipOptions.id}
                            type="radio"
                            name="tip"
                            value={tipOptions.value}
                            onChange={e => settip(+e.target.value)}
                            checked={tipOptions.value === tip}
                        >

                        </input>
                    </div>

                ))}

            </form>
        </div>
    )
}

export default TipPorcent