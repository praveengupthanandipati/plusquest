import React from 'react'

const SubPageHeader = ({subtitle, title}) => {
  return (
    <div>
       <div className="container">
            <div className="row">
                <div class="col-md-6">
                <h5 class="pb-2 text-primary-color font-semibold">
                    {subtitle}
                </h5>
                <h1 class="subpageHeaderTitle font-semibold text-secondary-color">
                    {title}
                </h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SubPageHeader
