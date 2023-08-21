import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const placeId = 'ChIJA5GuoWhbs0ARdV6bN-twxSA'; // Replace with the actual place ID
const apiKey = 'AIzaSyAp6uSKUQ6K5OcTFug0O3iq5BwgJ2T3kzk';   // Replace with your Google API key


const GoogleReviews = () => {

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchAndDisplayReviews = async () => {
      try {
        const response = await fetch(
          `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&key=${apiKey}`
        );

        if (response.ok) {
          const data = await response.json();
          setReviews(data.result.reviews || []);
        } else {
          console.error('Failed to fetch reviews');
        }
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };

    fetchAndDisplayReviews();
  }, []);


  return (
    <div>
      <h2>Google Reviews</h2>
      <ul>
        {reviews.map((review) => (
          <li key={review.time}>
            <p>{review.text}</p>
            <p>Rating: {review.rating}</p>
            <p>Author: {review.author_name}</p>
          </li>
        ))}
      </ul>
    </div>
  );

        }
export default GoogleReviews;