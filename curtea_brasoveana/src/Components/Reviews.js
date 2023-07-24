import { ElfsightWidget } from 'react-elfsight-widget';
import '../../src/styles/reviews.css'



function Reviews() {

    return (

        <div className="gallery-container">
            <div className="gallery-item">
                <ElfsightWidget widgetId='f746fdc6-9a32-41d9-91cd-ca84b756e24c' />
                <div className="overlay">
                    <p>Reviews</p>
                </div>
                </div>
        </div>

    );

}

export default Reviews;