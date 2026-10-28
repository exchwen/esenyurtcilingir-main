import { ArrowRight, Check, MessageCircle, Phone } from 'lucide-react';
import { business } from '@/data/business';
import { Button } from '../ui/Button';
import { HeroPhotoPreview } from '../ui/HeroPhotoPreview';

export function Hero() {
  return (
    <section id="ana-sayfa" className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="status-pill"><span /> {business.serviceMessage}</div>
          <h1>Esenyurt <em>7/24</em><br />Acil Çilingir</h1>
          <p className="hero-lead">Kapıda mı kaldınız? Esenyurt ve çevresinde çilingir hizmeti için bizi arayın.</p>
          <p className="slogan">“{business.slogan}.”</p>
          <div className="hero-buttons">
            <Button href={business.phoneHref}><Phone size={18} /> Hemen Ara <ArrowRight size={17} /></Button>
            <Button href={business.whatsappHref} variant="dark" external><MessageCircle size={18} /> WhatsApp’tan Ulaş</Button>
          </div>
          <div className="trust-row">
            <span><Check /> 7/24 iletişim</span>
            <span><Check /> Açık iletişim</span>
            <span><Check /> Fiyat bilgisi</span>
          </div>
        </div>
        <HeroPhotoPreview />
      </div>
    </section>
  );
}
