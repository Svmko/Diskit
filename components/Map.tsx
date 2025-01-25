import React from 'react';

const Map: React.FC<{ courses: { id: number; name: string; latitude: number; longitude: number; }[] }> = ({ courses }) => {
    return (
        <div style={{ height: '400px', width: '100%' }}>
            {/* Here you would integrate a mapping library like Google Maps or Leaflet */}
            {/* For example, using Google Maps API */}
            <h2>Course Locations</h2>
            <ul>
                {courses.map(course => (
                    <li key={course.id}>
                        {course.name} - Latitude: {course.latitude}, Longitude: {course.longitude}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Map;