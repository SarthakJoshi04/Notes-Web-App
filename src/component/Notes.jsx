import { useState } from 'react'

export default function Note() {

  const [noteList, setNoteList] =  useState(["Abc"])

  const addNotes = () => {
    const newNoteList = [...noteList];
    newNoteList.push({value: ""});
    setNoteList(newNoteList)
  }

  const handleTextChange = (value, index) => {
    const newNoteList = noteList?.map((note, i) => {
      if(i === index){
        return{
          ...note,
          value: value
        }
      }
      return note
    })
    setNoteList(newNoteList)
  }
  
  const handleDoubleClick = (index) => {
    console.log("Double clicked noted")
    const newNoteList = noteList?.filter((_, i) => i !== index)
    setNoteList(newNoteList)
  }

  return (
    <>
      <h1 className="heading">Notes App</h1>
      <p className="info-text">Double click on a note to remove it</p>
      <div className="flex flex-wrap justify-start items-center gap-10">
        {
          noteList?.map((note, index) => {
            return (
              <div key={index} className="flex flex-col gap-1">
                <textarea value={note?.value} rows={8} className="bg-gray-200 rounded-md p-5 resize-none"
                  onChange={(event) => {
                    const value = event.target.value
                    handleTextChange(value, index)
                  }}
                  onDoubleClick={() => {
                    handleDoubleClick(index)
                  }} />
              </div>
            )
          })
        }
        <button className="btn" id="btn" onClick={() => { addNotes() }}>+</button>
      </div>
    </>
  )
}