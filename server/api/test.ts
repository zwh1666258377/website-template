import express from 'express';

export function test(app: ReturnType<typeof express>) {
  app.get('/api/test', (req, res) => {
    res.json({
      test: 'test'
    });
  });
}
