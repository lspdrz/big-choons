import React from 'react'
import SharedTrack from 'components/SharedTrack'

const TrackFeed: React.FC = () => (
  <div
    className="w-100 px-4 sm:px-6 md:px-6 lg:px-8"
    style={{
      height: 'calc(100vh - 120px)',
      overflowY: 'scroll',
    }}
  >
    <div className="py-4 sm:py-8 grid grid-cols-1 gap-y-4 gap-x-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <SharedTrack />
      <SharedTrack />
      <SharedTrack />
      <SharedTrack />
      <SharedTrack />
      <SharedTrack />
      <SharedTrack /> <SharedTrack />
      <SharedTrack />
      <SharedTrack />
      <SharedTrack />
      <SharedTrack />
      <SharedTrack />
      <SharedTrack /> <SharedTrack />
      <SharedTrack />
      <SharedTrack />
      <SharedTrack />
      <SharedTrack />
      <SharedTrack />
      <SharedTrack />
    </div>
  </div>
)

export default TrackFeed
