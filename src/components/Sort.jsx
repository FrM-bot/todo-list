import Arrow from '../icons/arrow'
import Select from './Select'

export const SortOptions = [
  { value: 'createdAt', text: 'Creacion' },
  { value: 'modifieAt', text: 'Modificacion' },
  { value: 'priority', text: 'Prioridad' }
]

const Sort = ({ isReversed, handlerReversed, handlerSelect }) => {
  return (
        <div className="flex gap-2 flex-col">
            <h3 className="">Ordernar por:</h3>
            <div className="flex gap-10 items-center">
                <div className="flex gap-1">
                    <span className="p-2 border-b">Fecha</span>
                    <Select options={SortOptions} selectProps={{ name: 'status', onChange: event => handlerSelect(event) }} />
                    <label className="bg-primary rounded-lg p-2 border border-zinc-700 grid place-content-center hover:bg-zinc-700">
                        <input type="checkbox" checked={isReversed} onChange={handlerReversed} className="sr-only peer" />
                        <span style={{ transform: isReversed ? 'rotate(0deg)' : 'rotate(180deg)' }}>
                            <Arrow />
                        </span>
                    </label>
                </div>
            </div>
            <div>

            </div>
        </div>
  )
}

export default Sort
