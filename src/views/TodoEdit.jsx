// import { Component, createRef, useEffect, useState } from 'react'
// import { useForm } from '../hooks/useForm'
// import { robotService } from '../services/robotService'

export const TodoEdit = (props) => {
  // // const [robot, setRobot] = useState(null)
  // const [robot, handleChange, setRobot] = useForm(null)

  // // inputRef = createRef()

  // useEffect(() => {
  //     loadRobot()
  // }, [])

  // const loadRobot = async () => {
  //     const id = props.match.params.id
  //     const robot = id ? await robotService.getById(id) : robotService.getEmptyRobot()
  //     setRobot(robot)
  // }

  // const onSaveRobot = async (ev) => {
  //     ev.preventDefault()
  //     await robotService.save({ ...robot })
  //     props.history.push('/')
  // }

  // const inputRef = (elInput) => {
  //     if (elInput) elInput.focus()
  // }

  // if (!robot) return <div>Loading...</div>
  return <section>EditTodo</section>;
};
