// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next"
import { HelloType } from "../../types"

export default (req: NextApiRequest, res: NextApiResponse) => {
  const hellow: HelloType = {name: 'Reza', age: 19};
  res.status(200).json(hellow)
}
