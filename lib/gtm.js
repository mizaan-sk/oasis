export const GTM_ID = 'GTM-WLDRW5Z6';

export const pageview = (url) => {
  window.dataLayer.push({
    event: 'pageview',
    page: url,
  });
};
