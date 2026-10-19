/**
 * GJC01 exact full name + NAP. Name = the store's full name as used on its Google Business Profile.
 * Public GBP primary phone only. Map link = this store's own Google place ID.
 */
export const FULL_NAME_NAP = {
  "code": "GJC01",
  "fullName": "Gas Junction Cannabis Dispensary Weed Delivery",
  "street": "2813 Dundas St W",
  "city": "Toronto",
  "region": "ON",
  "postal": "M6P 1Y6",
  "phoneDisplay": "(437) 291-0948",
  "phoneTel": "tel:+14372910948",
  "hours": "Open 24 hours, 7 days a week",
  "mapsUrl": "https://www.google.com/maps/place/?q=place_id:ChIJ5fWBhQo1K4gRecy0Z7mLT04",
  "placeId": "ChIJ5fWBhQo1K4gRecy0Z7mLT04"
} as const;

export const FULL_NAME_NAP_ADDRESS = `${FULL_NAME_NAP.street}, ${FULL_NAME_NAP.city}, ${FULL_NAME_NAP.region} ${FULL_NAME_NAP.postal}`;
