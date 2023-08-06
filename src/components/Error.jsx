function Errored({ error }) {
  return (
    <div
      className="flex flex-col w-full h-screen items-center justify-center gap-5"
      role="status"
    >
      <p className="font-semibold">Error: {error}</p>
    </div>
  )
}
export default Errored
