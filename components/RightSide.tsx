import React from 'react'

const RightSide = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-end gap-6">
      <a href="mailto:eric.m.ramsey@outlook.com">
          <p className="flex flex-col text-lg rotate-90 w-56 tracking-widest text-textLight">
              eric ramsey
          </p>
      </a>
      <div className="w-[2px] h-36 bg-textDark"></div>
    </div>
  )
}

export default RightSide;
