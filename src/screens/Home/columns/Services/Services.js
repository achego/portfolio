import React from 'react'
import Section from '../../../../components/Section'
import { services } from '../../../../globals/global'
import Service from './Service'

const Services = () => {
  const all_services = services.map(service => 
    <Service title={service.title} icon={service.icon} description={service.description}/>
  )
  return (
    <Section title='Services' bg='bg-[color:var(--grey-10)]'>
        <div className='grid grid-cols-1 gap-8'>
            {all_services}
        </div>
    </Section>
  )
}

export default Services