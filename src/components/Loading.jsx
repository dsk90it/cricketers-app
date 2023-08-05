import { IconLoading } from './Icons'

function Loading({ text = 'Loading...' }) {
  return (
    <div className="flex flex-col w-full h-screen items-center justify-center gap-5" role="status">
      <p className="text-2xl text-gray-400 font-semibold">{text}</p>
      <IconLoading />
    </div>
  )
}
export default Loading
