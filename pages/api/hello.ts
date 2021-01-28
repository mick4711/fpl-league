// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next"

export default (_: NextApiRequest, res: NextApiResponse) => {
  res.statusCode = 200
  res.json({ name: "Michael O'Hegarty" })
}
