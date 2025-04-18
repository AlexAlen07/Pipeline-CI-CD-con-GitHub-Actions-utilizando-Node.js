const request = require('supertest');
const express = require('express');
const app = require('../src/app');

describe('GET /', () => {
    it('debe responder con código 200', async () => {
      const res = await request(app).get('/');
      expect(res.statusCode).toBe(200);
    });
}); 