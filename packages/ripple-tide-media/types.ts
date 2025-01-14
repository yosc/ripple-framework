import type { TidePageBase } from '@dpc-sdp/ripple-tide-api/types'

export type TideMediaHeader = {
  title: string
}

export type TideMediaMedia = {
  type: 'embedded_video' | 'audio'
  url: string
  content: string
}

export interface TideMediaPage extends TidePageBase {
  header: TideMediaHeader
  media: TideMediaMedia
}
