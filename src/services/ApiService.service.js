import { buildQueryString } from "@/utils/string-helper";

async function request( options = {}) {
    const { url, method = 'GET', body, headers = {} } = options;
  let fullUrl = `${process.env.NEXT_PUBLIC_CMS_DOMAIN}${url}`;
  const config = {
    method,
    headers,
    cache: 'force-cache', // Use cache for GET requests
    next: { revalidate: 60 }, // Revalidate every 60 seconds
    };
    config.headers['Content-Type'] = 'application/json';
    config.headers['Authorization'] = `Bearer ${process.env.NEXT_PUBLIC_STRAPI_SECRET}`;
  try {
    if (method !== 'GET' && body) {
        config.body = JSON.stringify(body);
      } else {
        const queryString = method === 'GET' && body ? `${buildQueryString(body)}` : ''
        fullUrl = `${fullUrl}${queryString}`
      }
    const response = await fetch(fullUrl, config);
    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }
    const data = await response.json();
    return data?.data
  } catch (error) {
    console.error('API request failed:', error);
    throw error;
  }
}

export default {
  get: (url, body, headers = {}) =>
    request({ url, method: 'GET', body, headers }),
  post: (url, body, headers = {}) =>
    request({ url, method: 'POST', body, headers }),
  put: (url, body, headers = {}) =>
    request({ url, method: 'PUT', body, headers }),
  delete: (url, headers = {}) =>
    request({ url, method: 'DELETE', headers }),
};