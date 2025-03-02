"use client";

import dynamic from 'next/dynamic'
import { Suspense, useEffect, useState } from 'react'

// Dynamically import the map component to avoid SSR issues
const CourseLocator = dynamic(() => import('../../components/CourseLocator'), {
  ssr: false,
  loading: () => <div>Loading map...</div>
})

export async function geocodeZipCode(zipCode: string): Promise<{lat: number, lng: number}> {
  const response = await fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${zipCode}&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`
  );
  const data = await response.json();
  
  if (data.results && data.results[0]) {
    const { lat, lng } = data.results[0].geometry.location;
    return { lat, lng };
  }
  
  throw new Error('Unable to geocode ZIP code');
}

const LocatorPage = () => {
  const [userLocation, setUserLocation] = useState<{ lat: number, lng: number } | null>(null);

  useEffect(() => {
    const checkPermission = async () => {
      if (navigator.permissions) {
        const result = await navigator.permissions.query({ name: 'geolocation' });
        if (result.state === 'granted') {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              setUserLocation({
                lat: position.coords.latitude,
                lng: position.coords.longitude
              });
            },
            (error) => {
              console.error("Error getting user location:", error);
            }
          );
        } else if (result.state === 'prompt') {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              setUserLocation({
                lat: position.coords.latitude,
                lng: position.coords.longitude
              });
            },
            (error) => {
              console.error("Error getting user location:", error);
            }
          );
        }
      } else {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setUserLocation({
              lat: position.coords.latitude,
              lng: position.coords.longitude
            });
          },
          (error) => {
            console.error("Error getting user location:", error);
          }
        );
      }
    };

    checkPermission();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Store Locator</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <CourseLocator userLocation={userLocation} />
      </Suspense>
    </div>
  );
};

export default LocatorPage;