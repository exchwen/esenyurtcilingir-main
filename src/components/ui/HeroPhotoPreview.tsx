import { ArrowUpRight, MapPin } from 'lucide-react';
import Image from 'next/image';
import { business } from '@/data/business';

export function HeroPhotoPreview() {
  return (
    <div className="hero-art hero-photo-card" aria-label="Esenyurt Acil Çilingir kapı ve anahtar görseli">
      <Image
        className="hero-photo"
        src="/images/hero-door-lock.png"
        alt="Açık kapı ve kapı kilidinde anahtar"
        fill
        priority
        sizes="(max-width: 900px) 100vw, 46vw"
      />
      <div className="hero-map-shade" />
      <div className="hero-map-topline hero-photo-topline">
        <span><MapPin size={15} /> Esenyurt, İstanbul</span>
        <small>7/24 Acil Servis</small>
      </div>
      <div className="hero-map-caption">
        <div>
          <b>Güvenliğiniz Bizim İşimiz</b>
          <span>{business.address}</span>
        </div>
        <a href={business.mapsUrl} target="_blank" rel="noopener noreferrer" aria-label="Google Maps'te aç">
          <ArrowUpRight size={18} />
        </a>
      </div>
    </div>
  );
}
