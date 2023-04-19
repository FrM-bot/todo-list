import { IFilters } from "../components/Filters"
import { SortOptiosType } from "../types/sort"
import { ITask } from "../types/task"

export const sortTasks = ({ tasks, filters, isReversedList, sortBy }: { tasks: ITask[], filters?: IFilters, isReversedList: boolean, sortBy: SortOptiosType }) => tasks
    .filter(task => (Object.values(filters || {}).includes(task.priority) || !filters?.priority?.length) && (Object.values(filters || {}).includes(task.status) || !filters?.status?.length))
    .toSorted((taskA, taskB) => {
        if (sortBy === 'priority') {
            return isReversedList ? taskA[sortBy].localeCompare(taskB[sortBy]) : taskB[sortBy].localeCompare(taskA[sortBy])
        }
        if (isReversedList) {
            return new Date(taskB[sortBy]).getTime() - new Date(taskA[sortBy]).getTime()
        }
        return new Date(taskA[sortBy]).getTime() - new Date(taskB[sortBy]).getTime()
    })