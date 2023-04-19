import { PrioritiesOptions } from '../utils/Priorities'
import Button from './Button'
import Input from './Input'
import Select from './Select'
import Textarea from './Textarea'
import { StatusOptions } from '../utils/Status'

export default function TaskForm ({ taskToEdit, clearForm }) {
  return (
        <>
            <div className='flex gap-2 items-center'>
                <Input props={{ type: 'text', placeholder: 'Titulo', name: 'title', defaultValue: taskToEdit?.title, required: true, minLength: 3 }} />
                <Select options={PrioritiesOptions} selectProps={{ name: 'priority', value: taskToEdit?.priority }} />
                <Select options={StatusOptions} selectProps={{ name: 'status', value: taskToEdit?.status }} />
            </div>

            <div className="w-full mb-4 border border-zinc-700 rounded-lg bg-zinc-900">
                <div className="px-2 py-2 bg-primary rounded-t-lg">
                    <label htmlFor="comment" className="sr-only">Your comment</label>
                    <Textarea props={{ name: 'description', placeholder: 'Descripcion', defaultValue: taskToEdit?.description || '', rows: 10, required: true, minLength: 3 }} />
                </div>
                <div className="flex items-center justify-between px-3 py-2 border-t border-zinc-700">
                    <Button props={{ type: 'submit' }}>
                        {
                            taskToEdit ? 'Guardar' : 'Creat tarea'
                        }
                    </Button>
                    <div className="flex pl-0 space-x-1 sm:pl-2">
                        {
                            taskToEdit && <Button variant="error" props={{ onClick: () => clearForm && clearForm(), type: 'reset' }}>Cancelar</Button>
                        }
                    </div>
                </div>
            </div>
        </>
  )
}
