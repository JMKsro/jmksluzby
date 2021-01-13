import CMS from 'netlify-cms-app'
import LandingPageTemplate from '../subpages/LandingPage'

CMS.registerPreviewTemplate('header', ({ entry }) => (
    <LandingPageTemplate {...entry.toJS().data} />
  ))