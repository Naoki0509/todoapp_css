import { z } from 'zod'

export const inputShema = z.object({
  id: z.string().optional(),
  title: z
    .string()
    .min(1, {
      message: 'タイトルを入力してください。',
    })
    .max(255),

  createdAt: z.string().optional(),

  memo: z.string().max(255),

  done: z.boolean(),
})

export type TodoInputType = z.infer<typeof inputShema>
