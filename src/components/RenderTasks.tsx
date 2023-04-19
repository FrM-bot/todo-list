// import { SortOptiosType } from "../App"
import Bin from "../icons/bin"
import Edit from "../icons/edit"
import { SortOptiosType } from "../types/sort"
import { ITask } from "../types/task"
import { Priorities } from "../utils/Priorities"
import { Status } from "../utils/Status"
import { setDateFormat } from "../utils/dateFormat"
import { sortTasks } from "../utils/sortTarks"
import { IFilters } from "./Filters"
import { useMemo } from 'react'

interface RenderTasksProps {
    tasks: ITask[]
    removeTask: (task: ITask) => void
    filters?: IFilters
    isReversedList: boolean
    sortBy: SortOptiosType
    hanlerEditTask: (task: ITask) => void
}

const RenderTasks = ({ tasks, removeTask, filters, isReversedList, sortBy, hanlerEditTask }: RenderTasksProps) => {
    const tasksFiltered: ITask[] = useMemo(() => sortTasks({ tasks, filters, isReversedList, sortBy }), [tasks, filters, isReversedList, sortBy])
    console.log({ isReversedList })
    return (
        <div className="flex gap-2 flex-col">
            <div className="w-full p-2 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-primary dark:border-gray-700">
                <div className="flex items-center justify-between mb-4">
                    <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Tareas</h5>
                </div>
                <div className="flow-roo w-full">
                    <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                        {
                            tasksFiltered.length > 0 ? tasksFiltered.map(({ id, title, description, priority, status, createdAt, modifieAt }) => {
                                return (
                                    <li key={id} className="py-3 sm:py-4 hover:bg-secondary px-2">
                                        <div className="flex flex-col text-xs text-gray-500 gap-1 mb-2">
                                            <span>
                                                Creado:
                                                <time>
                                                    {setDateFormat({ date: createdAt })}
                                                </time>
                                            </span>
                                            <span>
                                                Modificado:
                                                <time>
                                                    {setDateFormat({ date: modifieAt })}
                                                </time>
                                            </span>
                                            <span>Prioridad: {Priorities[priority]}</span>
                                            <span>Estatus: {Status[status]}</span>
                                        </div>
                                        <div className="flex items-center space-x-4">
                                            <div className="flex-1 min-w-0">
                                                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                                    {title}
                                                </p>
                                                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                                    {description}
                                                </p>
                                            </div>
                                            <div className="inline-flex gap-2 items-center text-base font-semibold text-gray-900 dark:text-white">
                                                <button onClick={() => removeTask({ id, title, description, priority, status, createdAt, modifieAt })} type="button" className="text-red-700 border border-red-700 hover:bg-red-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:focus:ring-red-800 dark:hover:bg-red-500">
                                                    <span className="sr-only">Icon description</span>
                                                    <Bin />
                                                </button>
                                                <button onClick={() => hanlerEditTask({ id, title, description, priority, status, createdAt, modifieAt })} type="button" className="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500">
                                                    <Edit />
                                                    <span className="sr-only">Icon description</span>
                                                </button>
                                            </div>
                                        </div>
                                    </li>
                                )
                            }) : <div className="grid place-content-center w-full text-lg min-h-[20rem]">
                                <span className="h-fit">No hay tareas</span>
                            </div>
                        }
                    </ul>

                </div>
            </div>

        </div>
    )
}

export default RenderTasks
