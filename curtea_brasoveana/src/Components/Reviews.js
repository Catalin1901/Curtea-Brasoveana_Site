import { ElfsightWidget } from 'react-elfsight-widget';
import '../../src/styles/reviews.css'



function Reviews() {

    return (
<div>
        <p className = 'reviews_title'>Ce spun clientii nostri despre noi</p>
        <div className="gallery-container_reviews">
            <div className="gallery-item_reviews">
                <ElfsightWidget widgetId='f746fdc6-9a32-41d9-91cd-ca84b756e24c' />
                <div className="overlay_reviews">
                    <p>Reviews</p>
                </div>
                </div>
        </div>
        </div>

    );

}

export default Reviews;


// import type { NextApiRequest, NextApiResponse } from 'next';


// export type Review = {
// 	profile_photo_url: string;
// 	rating: number;
// 	text: string;
// 	 author_name: string;
// };


// const placeId = 'PLACE_ID_HERE';
// const apiKey = process.env.PLACES_KEY;
// const url = `https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeId}&key=${apiKey}`;


// const getReviews = (
// 	req: Request,
// 	res: NextApiResponse<Review[]>,
// ) {
// 	const details = await fetch(url);
// 	const { result: { reviews } } = await details.json();
// 	res.status(200).json(reviews);
// }

// export default getReviews;