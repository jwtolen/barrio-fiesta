/**
 * Barrio Fiesta — site configuration
 * Update ratings, hours, links, and CTAs here.
 */
export const site = {
  name: 'Barrio Fiesta Mexican Grill',
  shortName: 'Barrio Fiesta',
  tagline: 'Fresh plates. Cold margaritas. A lively atmosphere.',
  address: {
    line1: '500 14th Street',
    line2: 'Tuscaloosa, AL 35404',
    plaza: 'Parkview Plaza Shopping Center',
    full: '500 14th Street, Tuscaloosa, AL 35404',
  },
  phone: {
    display: '(205) 737-7087',
    tel: '+12057377087',
  },
  hours: {
    weekday: { label: 'Sunday – Thursday', open: '11:00', close: '21:00', display: '11:00 AM – 9:00 PM' },
    weekend: { label: 'Friday – Saturday', open: '11:00', close: '22:00', display: '11:00 AM – 10:00 PM' },
  },
  lunch: {
    start: '11:00',
    end: '15:00',
    display: '11 AM – 3 PM',
    fromPrice: '8',
  },
  /** Easy to update — matches current Google snapshot */
  rating: {
    stars: 4.2,
    count: 44,
    source: 'Google',
    /** Replace with your Google Business reviews URL when ready */
    reviewsUrl: 'https://www.google.com/maps/search/?api=1&query=Barrio+Fiesta+Mexican+Grill+500+14th+Street+Tuscaloosa+AL',
  },
  maps: {
    directions: 'https://www.google.com/maps/dir/?api=1&destination=500+14th+Street+Tuscaloosa+AL+35404',
    embed: 'https://www.google.com/maps?q=500+14th+Street+Tuscaloosa+AL+35404&output=embed',
    place: 'https://www.google.com/maps/search/?api=1&query=Barrio+Fiesta+Mexican+Grill+500+14th+Street+Tuscaloosa+AL',
  },
  social: {
    /** Replace with the restaurant Facebook Page URL */
    facebook: 'https://www.facebook.com/search/top?q=Barrio%20Fiesta%20Mexican%20Grill%20Tuscaloosa',
  },
  /**
   * Order Online — when empty, links to the locked /order.html page.
   * When ready, set e.g. DoorDash URL: 'https://www.doordash.com/...'
   */
  orderOnlineUrl: '',
  orderPageUrl: '/order.html',
  seo: {
    title: 'Barrio Fiesta Mexican Grill | Mexican Restaurant in Tuscaloosa, AL',
    description:
      'Visit Barrio Fiesta Mexican Grill in Tuscaloosa for tacos, fajitas, quesabirria, carnitas, margaritas, lunch specials and more at 500 14th Street.',
  },
};
