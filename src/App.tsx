import { Reducer, useReducer, useState } from "react"
import RenderTasks from "./components/RenderTasks"
import Filters, { IFilters } from "./components/Filters"
import { DistatchTasks, TYPE_DISPATCH_TASKS, taskReducer } from "./reducers/task.reducer"
import Form from "./components/Form"
import TaskForm from "./components/TaskForm"
import Sort from "./components/Sort"
import { useModal } from "./components/Modal"
import { ITask, KeysRequiredType } from "./types/task"
import { SortOptiosType } from "./types/sort"

const keysRequired: KeysRequiredType[] = ['title', 'description', 'priority', 'status']

function App() {
  const [tasks, dispatchTasks] = useReducer<Reducer<ITask[], { type: DistatchTasks; task: ITask }>>(taskReducer, JSON.parse(window.localStorage.getItem('tasks') || 'null') || [])
  const [taskToEdit, setTaskToEdit] = useState<ITask>()
  const [isReversedList, setiIsReversedList] = useState(false)
  const [sortBy, setSortBy] = useState<SortOptiosType>('modifieAt')
  const { Modal, handlerShowModal, isShow } = useModal()
  const handlerSubmit = (formData: Omit<ITask, 'id'>) => {
    const uuid = self.crypto.randomUUID()
    dispatchTasks({
      type: TYPE_DISPATCH_TASKS.ADD_NEW_TASK,
      task: { ...formData, id: uuid, createdAt: new Date(), modifieAt: new Date() }
    })
  }

  const [filters, setFilters] = useState<IFilters>()

  const removeTask = (task: ITask) => {
    dispatchTasks({
      type: TYPE_DISPATCH_TASKS.REMOVE_TASK,
      task,
    })
  }

  const applyFilter = (filter: IFilters) => {
    setFilters({
      ...filter
    })
  }

  const clearForm = () => {
    setTaskToEdit(undefined)
    handlerShowModal(false)
  }

  const handlerEditTask = (task: ITask) => {
    setTaskToEdit(task)
    window.scrollTo({ top: 0 })
  }

  const handlerReversed = () => {
    setiIsReversedList(!isReversedList)
  }

  const handlerSelectSort = (event: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(event)
    setSortBy(event.target.value as SortOptiosType)
  }

  const handlerSubmitEdit = (formData: ITask) => {
    for (const key of keysRequired) {
      if (!formData[key]) {
        return alert(`Selecciona o completa el campo: ${key}`)
      }
    }
    if (taskToEdit) {
      dispatchTasks({
        type: TYPE_DISPATCH_TASKS.EDIT_TASK,
        task: {
          ...formData,
          id: taskToEdit.id,
          modifieAt: new Date(),
          createdAt: taskToEdit.createdAt
        }
      })
      handlerShowModal(false)
      return setTaskToEdit(undefined)
    }
  }

  const hanlerEditTask = (task: ITask) => {
    setTaskToEdit(task)
    handlerShowModal(!isShow)
  }

  return (
    <div className="py-5 max-w-6xl mx-auto px-2">
      <header className='bg-primary border-zinc-700 text-white px-3 py-2 mb-6 text-center rounded-lg border-b'>
        <h1 className='text-lg'>Todo List</h1>
      </header>
      <Form onSubmit={handlerSubmit} className='flex flex-col gap-4 mb-6'>
        <TaskForm />
      </Form>
      <section>
        <header onClick={() => window.scrollTo({ top: 0 })} className='bg-primary text-lg rounded-lg border-y border-zinc-700 cursor-pointer px-3 py-2 mb-2 text-center sticky z-10 top-1'>
          <h2 className='text-base'>Tareas</h2>
        </header>
        <div className="bg-primary border border-zinc-700 p-4 rounded-lg mb-2">
          <Filters applyFilter={applyFilter} filters={filters} />
          <Sort handlerSelect={handlerSelectSort} isReversed={isReversedList} handlerReversed={handlerReversed} />
        </div>
        <RenderTasks hanlerEditTask={hanlerEditTask} sortBy={sortBy} isReversedList={isReversedList} removeTask={removeTask} tasks={tasks} filters={filters} />
      </section>
      <Modal>
        <Form onSubmit={handlerSubmitEdit} className='flex flex-col gap-4 mb-6 bg-secondary p-2 rounded-lg'>
          <TaskForm clearForm={clearForm} taskToEdit={taskToEdit} />
        </Form>
      </Modal>
    </div>
  )
}

export default App
