import TasksFaq from '@/components/TasksFaq'
import TasksFeatures from '@/components/TasksFeatures'
import TasksForm from '@/components/TasksForm'
import TasksHero from '@/components/TasksHero'
import TasksPricing from '@/components/TasksPricing'
import TasksProblem from '@/components/TasksProblem'
import TasksStrenghts from '@/components/TasksStrenghts'
import TasksWhyUs from '@/components/TasksWhyUs'
import Templates from '@/components/Templates'
import { Metadata } from 'next'
import React from 'react'
import "./tasks-animate.css"
export const metadata: Metadata = {
  title: 'Simplify everyday tasks & operation management for businesses',
  description: 'Simplify everyday tasks & operation management for businesses. Create, assign & verify tasks effortlessly with Task by Petpooja.',
}
const page = () => {
  return (
    <div>
    <TasksHero/>
    <TasksStrenghts/>
    <TasksFeatures/>
    <Templates/>
    <TasksWhyUs/>
    <TasksProblem/>
    <TasksPricing/>
    <TasksFaq/>
    <TasksForm/>
   
    </div>
  )
}

export default page