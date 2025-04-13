import React from 'react'

const SubPageHeader = ({subtitle, title}) => {
  return (
    <div>
       <div className="container">
            <div className="row">
                <div className="col-md-10">
                <h5 className="pb-2 text-primary-color font-semibold">
                    {subtitle}
                </h5>
                <h1 className="subpageHeaderTitle font-semibold text-secondary-color">
                    {title}
                </h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SubPageHeader
