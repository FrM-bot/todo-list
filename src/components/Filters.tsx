import { type TPriority, type TStatus } from '../types/task'
import { PrioritiesOptions } from '../utils/Priorities'
import { StatusOptions } from '../utils/Status'
import Select from './Select'

export interface IFilters {
  priority?: TPriority
  status?: TStatus
}

interface FilterProps {
  applyFilter: (filters: IFilters) => void
  filters?: IFilters
}

const Filters = ({ applyFilter, filters }: FilterProps) => {
  const handlerSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(event.target.name, event.target.value)
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
                    <Select options={PrioritiesOptions} selectProps={{ name: 'priority', onChange: event => { handlerSelect(event) } }} />
                </div>
                <div className="flex gap-1">
                    <span className="p-2 border-b">Estado</span>

                    <Select options={StatusOptions} selectProps={{ name: 'status', onChange: event => { handlerSelect(event) } }} />
                </div>
            </div>
            <div>

            </div>
        </div>
  )
}

export default Filters
