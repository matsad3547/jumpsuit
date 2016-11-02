import path from 'path'
import fs from 'fs-extra'

fs.copySync(path.resolve(__dirname, '../examples/getting-started'), path.resolve('./'))
