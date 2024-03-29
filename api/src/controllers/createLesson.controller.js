import Lesson from '../models/lesson.js';

// Controlador para crear una nueva lección asociada a un curso
export const createLesson = async (req, res) => {
  try {
    const { courseId, title, content, videoUrl } = req.body;
    const lesson = await Lesson.create({
      courseId,
      title,
      content,
      videoUrl
    });
    return res.status(201).json({ lesson });
  } catch (error) {
    return res.status(500).json({ error: 'Error al crear la lección' });
  }
};
