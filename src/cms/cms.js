import CMS from 'netlify-cms-app'
import ServicePageTemplate from '../subpages/ServicePageTemplate'

CMS.registerPreviewTemplate('services-page', ({ entry }) => (
    <ServicePageTemplate {...entry.toJS().data} />
))