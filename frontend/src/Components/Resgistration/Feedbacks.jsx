import React from 'react'

const Feedbacks = ({Feedback,Name}) => {
  return (
     <div id='carousel' className='carousels'>
    
        <div id='profile'>
        <img src="https://static.vecteezy.com/system/resources/previews/005/005/788/original/user-icon-in-trendy-flat-style-isolated-on-grey-background-user-symbol-for-your-web-site-design-logo-app-ui-illustration-eps10-free-vector.jpg" />
        <div>

        <span>{Name}</span>
        </div>
        </div>
        <div className="para">
          {Feedback}
        </div>
    </div>
  )
}

export default Feedbacks