import React from 'react'
import DrugCard from './components/DrugCard'

const DrugResult = () => {
  return (
    <div class="flex flex-wrap justify-between w-full p-2">
      <DrugCard/><DrugCard/><DrugCard/><DrugCard/><DrugCard/><DrugCard/>
    </div>
  )
}

export default DrugResult