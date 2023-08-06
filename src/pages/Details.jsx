function Details({ player }) {
  console.log('re-render: player details')
  return (
    <>
      <h2 className="text-2xl font-semibold my-8">Player Details</h2>
      {player.name}
    </>
  )
}
export default Details
