declare global {
  interface Array<T> {
    toSorted(compareFn?: (a: T, b: T) => number): T[]
  }
}

export type TStatus = "new" | "in_process" | "finished"

export type TPriority = "high" | "medium" | "low"

type KeysRequiredType = "title" | "description" | "priority" | "status"

export interface ITask {
  id: string
  title: string
  description: string
  status: TStatus
  priority: TPriority
  createdAt: Date
  modifieAt: Date
}
