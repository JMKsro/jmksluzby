import React from 'react'
import CMS from 'netlify-cms-app'
import ServicePageTemplate from '../subpages/ServicesPage'

CMS.registerPreviewTemplate('services-page', ({ entry }) => (
    <ServicePageTemplate services={entry} />
))