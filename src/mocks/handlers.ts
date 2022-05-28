import { rest } from 'msw'

export const handlers = [
    rest.get('/greetings', (req, res, ctx) => {
      return res(ctx.status(200), ctx.json({
          message: "Welcome to application",
          date: new Date().toLocaleString()
      }))
    }),
]
  