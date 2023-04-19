import { type ITask } from '../types/task'

export const TYPE_DISPATCH_TASKS = {
  ADD_NEW_TASK: 'ADD_NEW_TASK',
  REMOVE_TASK: 'REMOVE_TASK',
  EDIT_TASK: 'EDIT_TASK'
} as const

export type DistatchTasks = keyof typeof TYPE_DISPATCH_TASKS

export function taskReducer (
  state: ITask[],
  action: {
    type: DistatchTasks
    task: ITask
  }
) {
  if (action.type === TYPE_DISPATCH_TASKS.REMOVE_TASK) {
    const newListTasks = state.filter((task) => task.id !== action?.task?.id)
    window.localStorage.setItem('tasks', JSON.stringify(newListTasks))
    return newListTasks
  }

  if (action.type === TYPE_DISPATCH_TASKS.EDIT_TASK) {
    const newListTasks = state.findIndex((task) => task.id === action?.task?.id)
    const taskList = [...state]
    taskList[newListTasks] = {
      ...action.task
    }
    window.localStorage.setItem('tasks', JSON.stringify(taskList))
    return taskList
  }

  if (action.type === TYPE_DISPATCH_TASKS.ADD_NEW_TASK) {
    const newTasks = [...state, action.task]
    window.localStorage.setItem('tasks', JSON.stringify(newTasks))
    return newTasks
  }

  throw Error(`Unknown action: ${action.type as string}`)
}
