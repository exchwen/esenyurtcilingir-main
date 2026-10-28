import Image from 'next/image';
import { ArrowUpRight, MapPin } from 'lucide-react';
import { business } from '@/data/business';
import { SectionHeading } from '../ui/SectionHeading';

const areas = [
  { name: 'Esenyurt', image: '/images/areas/esenyurt.png' },
  { name: 'Avcılar', image: '/images/areas/avcilar.png' },
  { name: 'Beylikdüzü', image: '/images/areas/beylikduzu.png' },
  { name: 'Parseller', image: '/images/areas/parseller.png' },
  { name: 'Yakuplu', image: '/images/areas/yakuplu.png' },
];

export function AreasServed() {
  return (
    <section className="section areas-served" aria-labelledby="hizmet-bolgeleri-baslik">
      <div className="container">
        <div className="areas-served-heading">
          <SectionHeading
            eyebrow="Hizmet bölgelerimiz"
            title="Size en yakın noktada yanınızdayız."
            description="Esenyurt ve çevresinde acil çilingir hizmeti için bizimle iletişime geçebilirsiniz."
          />
        </div>

        <div className="areas-served-gallery">
          {areas.map((area) => (
            <a className="area-card" key={area.name} href={business.phoneHref}>
              <Image src={area.image} alt={`${area.name} hizmet bölgesi`} fill sizes="(max-width: 620px) 100vw, (max-width: 900px) 50vw, 20vw" />
              <span className="area-card-overlay" />
              <span className="area-card-content">
                <span className="area-card-title"><MapPin size={16} /> {area.name}</span>
                <span className="area-card-link">Hizmet al <ArrowUpRight size={15} /></span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
