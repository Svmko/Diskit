interface Course {
  id: number;
  name: string;
  address: string;
  distance?: number;
}

interface CourseListProps {
  courses: Course[];
}

export default function CourseList({ courses }: CourseListProps) {
  return (
    <div className="mt-4">
      <h2 className="text-xl font-semibold mb-4">Nearby Courses</h2>
      {courses.length === 0 ? (
        <p>No courses found. Try another search.</p>
      ) : (
        <ul className="space-y-4">
          {courses.map((course) => (
            <li key={course.id} className="border p-4 rounded-lg">
              <h3 className="font-medium">{course.name}</h3>
              <p className="text-gray-600">{course.address}</p>
              {course.distance && (
                <p className="text-sm text-gray-500">{course.distance.toFixed(1)} miles away</p>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}