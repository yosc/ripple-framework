import { TidePageApi } from '../..'

export const map = async (src, tidePageApi: TidePageApi) => {
  if (!src.field_show_site_section_nav) {
    return null
  }

  // The section/site id comes from the drupal 'route' api
  const siteId = tidePageApi.sectionId

  // With the correct site/section id, we can now choose the correct site data from 'field_node_site'
  const siteData = src.field_node_site.find((site) => {
    return `${site.drupal_internal__tid}` === siteId
  })

  // Finally, this site data will contain a reference to the menu we need to fetch
  const menuData = siteData.field_site_main_menu

  const menu = await tidePageApi.getSiteMenu(
    tidePageApi.site,
    menuData,
    tidePageApi.path
  )

  return {
    title: src.field_landing_page_nav_title,
    items: menu
  }
}

export const includes = [
  'field_node_site',
  'field_node_site.field_site_main_menu'
]