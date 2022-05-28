import { rest } from 'msw'

export const handlers = [
    rest.get('/api/greetings', (req, res, ctx) => {
      return res(ctx.status(200), ctx.json({
          message: "Welcome to application",
          date: new Date().toLocaleString()
      }))
    }),
]
  