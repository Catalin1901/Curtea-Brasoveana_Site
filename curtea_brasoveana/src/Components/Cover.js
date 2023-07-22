import High from  '../assets/Front.jpeg'
import Low from '../assets/Low.jpg'
import  '../styles/cover.css'
const  Cover=() => {
    const screenWidth = window.innerWidth;
    return (
<div className="container-fluid p-0">
      <div className="image-container">
        <picture>
          {/* Low-resolution image for smaller screens */}
          {screenWidth <= 768 && (
            <source srcSet={Low} />
          )}

          {/* High-resolution image for larger screens */}
          {screenWidth > 768 && (
            <source srcSet={High} />
          )}

          {/* Fallback image for browsers that do not support the picture element */}
          <img src={High} alt="Huge Image" className="img-fluid" />
        </picture>
      </div>
    </div>
    )
    }
export default Cover;