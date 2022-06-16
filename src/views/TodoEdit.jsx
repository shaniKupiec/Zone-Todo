import { Component, createRef, useEffect, useState } from 'react'
import { useForm } from '../hooks/useForm'
import { robotService } from '../services/robotService'

export const RobotEdit = (props) => {


    // const [robot, setRobot] = useState(null)
    const [robot, handleChange, setRobot] = useForm(null)

    // inputRef = createRef()

    useEffect(() => {
        loadRobot()
    }, [])


    const loadRobot = async () => {
        const id = props.match.params.id
        const robot = id ? await robotService.getById(id) : robotService.getEmptyRobot()
        setRobot(robot)
    }

    const onSaveRobot = async (ev) => {
        ev.preventDefault()
        await robotService.save({ ...robot })
        props.history.push('/')
    }

    const inputRef = (elInput) => {
        if (elInput) elInput.focus()
    }

    if (!robot) return <div>Loading...</div>
    return (
        <section className='robot-edit'>
            <h2>{robot._id ? 'Edit' : 'Add'} Robot</h2>
            <form onSubmit={onSaveRobot} >
                <label htmlFor="model">Model</label>
                <input ref={inputRef} onChange={handleChange} value={robot.model} type="text" name="model" id="model" />

                <label htmlFor="type">Type</label>
                <select onChange={handleChange} value={robot.type} name="type" id="type">
                    <option value="" disabled>Choose a Type</option>
                    <option value="Cooking">Cooking</option>
                    <option value="Cleaning">Cleaning</option>
                    <option value="Pleasure">Pleasure</option>
                    <option value="Office">Office</option>
                </select>

                <button>Save</button>
            </form>

        </section>
    )
}
