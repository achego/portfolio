import React from 'react'
import Section from '../../../../components/Section'
import { projects } from '../../../../globals/global'
import LatestProject from './LatestProject'

const LatestProjects = () => {
  const latest_projects = projects.filter(project => projects.indexOf(project) < 3).map(project => <LatestProject title={project.title} description={project.description} />)
  return (
    <Section title='Latest Projects' bg='bg-white' description='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt sed reiciendis quis provident vero cum accusamus illum perferendis debitis, alias porro? Incidunt, veniam? Dicta adipisci accusamus officia temporibus inventore a.'>
        <div className='grid grid-cols-1 gap-8'>
            {latest_projects}
        </div>
    </Section>
  )
}

export default LatestProjects