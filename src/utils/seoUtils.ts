export const generateMetaDescription = (content: string) => {
  // Rensa HTML och trimma till max 155 tecken
  const cleanContent = content.replace(/<[^>]*>/g, '');
  return cleanContent.length > 155 
    ? `${cleanContent.substring(0, 152)}...` 
    : cleanContent;
};

export const generateCanonicalUrl = (path: string) => {
  const baseUrl = 'https://frokenkoll.se';
  return `${baseUrl}${path}`;
};

export const generateSocialTags = (title: string, description: string, image?: string) => ({
  'og:title': title,
  'og:description': description,
  'og:image': image || 'https://frokenkoll.se/og-image.jpg',
  'twitter:card': 'summary_large_image',
  'twitter:title': title,
  'twitter:description': description,
  'twitter:image': image || 'https://frokenkoll.se/og-image.jpg'
});