const request = require('supertest');
const express = require('express');
const tasks = require('./tasks');
const Task = require('../models/Task');

const app = express();
app.use(express.json());
app.use('/', tasks);

describe('GET /', () => {
  it('should fetch all tasks', async () => {
    Task.getAll = jest.fn().mockResolvedValue([
      { id: '1', title: 'First task', done: false },
      { id: '2', title: 'Second task', done: true },
    ]);

    const res = await request(app).get('/');

    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual([
      { id: '1', title: 'First task', done: false },
      { id: '2', title: 'Second task', done: true },
    ]);
  });
});

describe('POST /', () => {
  it('should create a new task', async () => {
    const newTask = { title: 'Test task', done: false };

    Task.add = jest.fn().mockResolvedValue({ id: '3', ...newTask });

    const res = await request(app).post('/').send(newTask);

    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({ id: '3', ...newTask });
  });
});
