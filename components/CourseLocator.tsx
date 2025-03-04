"use client";

import { useState, useEffect } from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'
import SearchForm from './SearchForm'
import CourseList from './CourseList'

const defaultCenter = {
  lat: 40.7128,
  lng: -74.0060
}

interface Course {
  id: number;
  name: string;
  lat: number;
  lng: number;
  address: string;
}

interface CourseLocatorProps {
  userLocation: { lat: number, lng: number } | null;
}

const CourseLocator = ({ userLocation }: CourseLocatorProps) => {
  const [courses, setCourses] = useState<Course[]>([])
  const [center, setCenter] = useState(defaultCenter)

  useEffect(() => {
    if (userLocation) {
      setCenter(userLocation);
    }
  }, [userLocation]);

  const handleSearch = async (zipCode: string, radius: number) => {
    // TODO: Implement API call to get courses near zipcode
    // This would typically fetch from your backend
    const mockCourses = [
      { id: 1, name: "Course 1", lat: 40.7128, lng: -74.0060, address: "123 Main St" },
      { id: 2, name: "Course 2", lat: 40.7228, lng: -74.0160, address: "456 Broadway" }
    ]
    setCourses(mockCourses)
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <SearchForm onSearch={handleSearch} />
        <CourseList courses={courses} />
      </div>
      <div className="h-[500px]">
        <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!}>
          <GoogleMap
            mapContainerClassName="w-full h-full"
            center={center}
            zoom={12}
          >
            {courses.map(course => (
              <Marker
                key={course.id}
                position={{ lat: course.lat, lng: course.lng }}
                title={course.name}
              />
            ))}
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  )
}

export default CourseLocator