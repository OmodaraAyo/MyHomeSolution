import React from 'react'
import { ReactNode } from 'react';
import ServiceRequestProvider from './serviceRequestProvider';

export default function ServiceRequestLayout({ children }: { children: ReactNode }) {

  return (
    <ServiceRequestProvider>{children}</ServiceRequestProvider>
  )
}
