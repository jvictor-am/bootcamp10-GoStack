const express = require('express');

const app = express();

app.use(express.json());

const projects = [];

function idValidation(req, res, next) {
  //middleware local
  const { id } = req.params;
  const project = projects.find(p => p.id == id);

  if (!project) {
    return res.status(400).json({ error: 'ID not found' });
  }

  return next();
}

function requisitionCounter(req, res, next) {
  //global middleware
  console.count('Number of Requests');

  return next();
}

//server.use(requisitionCounter);

app.post('/projects', requisitionCounter, (req, res) => {
  const { id, title } = req.body;

  const projectInfo = {
    id,
    title,
    tasks: []
  };

  projects.push(projectInfo);

  return res.json(projects);
});

app.get('/projects', requisitionCounter, (req, res) => {
  return res.json(projects);
});

app.put('/projects/:id', idValidation, requisitionCounter, (req, res) => {
  const { id } = req.params;

  const { title } = req.body;

  const project = projects.find(proj => proj.id == id);

  project.title = title;

  return res.json(projects);
});

app.delete('/projects/:id', idValidation, requisitionCounter, (req, res) => {
  const { id } = req.params;

  const project = projects.findIndex(proj => proj.id == id);

  projects.splice(project, 1);

  return res.json(projects);
  //return res.send();
});

app.post(
  '/projects/:id/tasks',
  idValidation,
  requisitionCounter,
  (req, res) => {
    const { id } = req.params;

    const { tasksDescr } = req.body;

    const project = projects.find(proj => proj.id == id);

    project.tasks.push(tasksDescr);

    return res.json(projects);
  }
);

app.listen(3333);
