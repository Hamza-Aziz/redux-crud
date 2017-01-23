import * as r from "ramda"

import { Config, Map } from '../../../types'

export default function replace(config: Config, current: Map<any>, record: any): Map<any> {
  var key = config.key
  var recordKey = record[key]

  return r.merge(current, {[recordKey]: record})
}
