import React, { FC, useState } from 'react'
import useTracker from '../hooks/useTracker'

const DATA_DOMAIN = 'farinalvaro.github.io/rif-analytics'
const SRC = 'https://plausible.io/js/plausible.js'

const Tracker: FC = () => {
  const [active, setActive] = useState(false)
  useTracker(
    { src: SRC, activated: active, dataDomain: DATA_DOMAIN }
  )

  return (
    <>
      <button onClick={() => setActive(true)}>Activate tracker</button>
    </>
  )
}

export default Tracker
