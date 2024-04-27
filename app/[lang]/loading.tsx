import { Logo } from '@/components/layouts/logo-component'

const Loading = () => {
  return (
    <div className="fixed left-0 top-0 z-[9999] flex h-full w-full items-center justify-center overflow-auto bg-white bg-opacity-10 backdrop-blur">
      <Logo/>
    </div>
  )
}

export default Loading
