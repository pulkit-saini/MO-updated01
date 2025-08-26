import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Seo from '@/components/SEO';

const images = [
  {
    url: 'https://mangosorange.co.in/assets/img/testimonials/offer-1.jpeg',
    caption: 'Offer letter distribution event - 1'
  },
  {
    url: 'https://mangosorange.co.in/assets/img/testimonials/offer-2.jpeg',
    caption: 'Offer letter distribution event - 2'
  },
  {
    url: 'https://mangosorange.co.in/assets/img/testimonials/offer-3.jpeg',
    caption: 'Offer letter distribution event - 3'
  },
  {
    url: 'https://mangosorange.co.in/assets/img/testimonials/offer-4.jpeg',
    caption: 'Offer letter distribution event - 4'
  },
  {
    url: 'https://mangosorange.co.in/assets/img/testimonials/offer-5.jpeg',
    caption: 'Offer letter distribution event - 5'
  },
  {
    url: 'https://mangosorange.co.in/assets/img/testimonials/offer-6.jpeg',
    caption: 'Offer letter distribution event - 6'
  },
  {
    url: 'https://mangosorange.co.in/assets/img/testimonials/offer-7.jpeg',
    caption: 'Offer letter distribution event - 7'
  },
];

const Blog = () => {
  const description = 'MangosOrange Blog & Gallery: Updates, events, and milestones including our Uttarakhand offer letter distribution ceremony.';
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'MangosOrange Blog & Gallery',
    description,
    hasPart: {
      '@type': 'ItemList',
      itemListElement: images.map((img, idx) => ({
        '@type': 'ImageObject',
        position: idx + 1,
        contentUrl: img.url,
        name: img.caption,
      })),
    },
  };

  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="MangosOrange Blog & Gallery | Updates and Events"
        description={description}
        jsonLd={jsonLd}
      />
      <Header />
      <main className="container mx-auto px-4 pt-28 pb-16">
        <header className="mb-10 text-center animate-enter">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">MangosOrange Blog & Gallery</h1>
          <p className="mt-3 text-muted-foreground max-w-3xl mx-auto">
            Offer letter distribution by Honourable Chief Minister of Uttarakhand Sh. Pushkar Singh Dhami Ji at Bageshwar District. MangosOrange Services Pvt. Ltd. recruited 70 candidates and contributed to employment generation for the state of Uttarakhand.
          </p>
        </header>

        <section aria-label="Event Photo Gallery" className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
          {images.map((img, idx) => (
            <figure
              key={img.url}
              className="overflow-hidden rounded-xl border border-border/50 bg-card shadow-sm hover-scale animate-fade-in"
              style={{ animationDelay: `${idx * 80}ms` }}
            >
              <img
                src={img.url}
                alt={`${img.caption} | MangosOrange event gallery`}
                loading="lazy"
                className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105"
              />
              <figcaption className="p-3 text-sm text-muted-foreground">{img.caption}</figcaption>
            </figure>
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
