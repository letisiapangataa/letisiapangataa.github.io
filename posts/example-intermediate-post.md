---
title: "Building RESTful APIs with Node.js and Express"
date: "2025-07-25"
excerpt: "Learn how to create scalable REST APIs using Node.js, Express, and modern development practices."
featuredImage: "/images/azure-sentinel-power-bi-featured.png"
difficulty: "Intermediate"
---

# Building RESTful APIs with Node.js and Express

This is an example of an **Intermediate** difficulty post. This content assumes some programming experience and introduces more complex concepts.

## What You'll Learn

- RESTful API design principles
- Express.js framework implementation
- Database integration with MongoDB
- Authentication and middleware
- Error handling and validation

## Prerequisites

- JavaScript fundamentals
- Basic understanding of HTTP
- Node.js installation experience
- Familiarity with command line

## Project Setup

Let's build a task management API with full CRUD operations.

### Initial Setup

```bash
npm init -y
npm install express mongoose bcryptjs jsonwebtoken
npm install --save-dev nodemon
```

### Basic Server Structure

```javascript
const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Middleware
app.use(express.json());

// Routes
app.get('/api/health', (req, res) => {
  res.json({ message: 'API is running' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

## Database Schema Design

```javascript
const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: String,
  status: {
    type: String,
    enum: ['pending', 'in-progress', 'completed'],
    default: 'pending'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});
```

## Authentication Middleware

```javascript
const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  
  if (!token) {
    return res.status(401).json({ error: 'Access token required' });
  }
  
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ error: 'Invalid token' });
    req.user = user;
    next();
  });
};
```

## CRUD Operations

### Create Task
```javascript
app.post('/api/tasks', authenticateToken, async (req, res) => {
  try {
    const task = new Task(req.body);
    await task.save();
    res.status(201).json(task);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
```

### Read Tasks
```javascript
app.get('/api/tasks', authenticateToken, async (req, res) => {
  try {
    const tasks = await Task.find({ userId: req.user.id });
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
```

## Error Handling

```javascript
const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  
  if (err.name === 'ValidationError') {
    return res.status(400).json({ error: err.message });
  }
  
  if (err.name === 'CastError') {
    return res.status(400).json({ error: 'Invalid ID format' });
  }
  
  res.status(500).json({ error: 'Something went wrong!' });
};

app.use(errorHandler);
```

## Testing the API

```bash
# Create a task
curl -X POST http://localhost:3000/api/tasks \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{"title": "Learn Node.js", "description": "Build a REST API"}'

# Get all tasks
curl -X GET http://localhost:3000/api/tasks \
  -H "Authorization: Bearer YOUR_TOKEN"
```

## Best Practices

1. **Use middleware** for common functionality
2. **Validate input** on all endpoints
3. **Handle errors** gracefully
4. **Use environment variables** for configuration
5. **Implement rate limiting** for production
6. **Add logging** for debugging

## Next Steps

- Add input validation with Joi
- Implement pagination
- Add comprehensive testing
- Deploy to cloud platform
- Add API documentation with Swagger

## Conclusion

Building RESTful APIs with Node.js and Express provides a solid foundation for modern web applications. This intermediate project introduces essential concepts while maintaining clean, scalable code structure.

---

*This intermediate difficulty post demonstrates more complex coding concepts and assumes programming experience.*
