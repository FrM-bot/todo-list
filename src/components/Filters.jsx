import { PrioritiesOptions } from '../utils/Priorities'
import { StatusOptions } from '../utils/Status'
import Select from './Select'

const Filters = ({ applyFilter, filters }) => {
  const handlerSelect = (event) => {
    applyFilter({
      ...filters,
      [event.target.name]: event.target.value
    })
  }
  return (
        <div className="flex gap-2 flex-col">
            <h3 className="">Filtrar por:</h3>
            <div className="flex gap-10 items-center">
                <div className="flex gap-1">
                    <span className="p-2 border-b">Prioridad</span>
                    <Select options={PrioritiesOptions} selectProps={{ name: 'priority', onChange: event => handlerSelect(event) }} />
                </div>
                <div className="flex gap-1">
                    <span className="p-2 border-b">Estado</span>

                    <Select options={StatusOptions} selectProps={{ name: 'status', onChange: event => handlerSelect(event) }} />
                </div>
            </div>
            <div>

            </div>
        </div>
  )
}

export default Filters
