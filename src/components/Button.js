import React from 'react'

const Button = ({className, children}) => {
  return (
    <div className={`bg-[color:var(--prim-5)] hover:bg-[color:var(--prim-8)] px-4 py-2 rounded-lg w-fit tracking-[var(--spacing)] uppercase font-bold text-sm text-[color:var(--prim-1)] cursor-pointer [transition:var(--transition)] ${className}`}>{children}</div>
  )
}

export default Button