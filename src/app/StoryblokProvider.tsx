'use client'

import { initializeStoryblok } from '@/lib/storyblok'
import { ReactNode } from 'react'

export default function StoryblokProvider({
  children,
}: {
  children: ReactNode
}) {
  initializeStoryblok()
  return children
}
