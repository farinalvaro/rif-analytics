import { useEffect } from 'react'

type UseTrackerProps = {
  src: string
  activated: boolean
  dataDomain: string
}

const useTracker = (
  { src, activated, dataDomain }: UseTrackerProps
) => {

  useEffect(() => {
    if (activated) {
      const script = document.createElement('script')

      script.setAttribute('src', src)
      script.setAttribute('async', 'true')
      script.setAttribute('data-domain', dataDomain)

      document.head.appendChild(script)

      return () => {
        document.head.removeChild(script)
      }
    }
  }, [src, activated, dataDomain])

}

export default useTracker
