const courseService = require("../service/CourseService");

// Function to create a new course
async function createCourse(req, res) {
  try {
    const courseData = req.body;
    const course = await courseService.createCourse(courseData);
    res.status(201).json(course);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Function to get all courses
async function getCourses(req, res) {
  try {
    const courses = await courseService.getCourses();
    res.status(200).json(courses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Function to update a course
async function updateCourse(req, res) {
  try {
    const { courseId } = req.params;
    const updatedCourseData = req.body;
    const result = await courseService.updateCourse(
      courseId,
      updatedCourseData
    );
    res.status(200).json(result.message);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Function to delete a course
async function deleteCourse(req, res) {
  try {
    const { courseId } = req.params;
    const result = await courseService.deleteCourse(courseId);
    res.status(200).json(result.message);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

//fucntion to get course by id
async function getCourseById(req, res) {
  try {
    const { courseId } = req.params;
    const { userId, role } = req.user;

    const course = await courseService.getCourseById(courseId, userId, role);
    res.status(200).json(course);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Function to assign a faculty to a course
async function assignFaculty(req, res) {
  try {
    const { courseId, facultyId, position } = req.body;
    const result = await courseService.assignFaculty(
      courseId,
      facultyId,
      position
    );
    res.status(200).json(result.message);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Function to remove a faculty from a course
async function removeFaculty(req, res) {
  try {
    const { courseId, facultyId } = req.params;
    const result = await courseService.removeFaculty(courseId, facultyId);
    res.status(200).json(result.message);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  createCourse,
  getCourses,
  updateCourse,
  deleteCourse,
  assignFaculty,
  removeFaculty,
  getCourseById,
};
