import { Mail, Phone } from 'lucide-react';
import { business } from '@/data/business';
import { BusinessLogo } from '../ui/BusinessLogo';

export function Footer() {
  return <footer className="footer"><div className="container footer-grid"><div><a className="logo" href="#ana-sayfa" aria-label={business.name}><BusinessLogo size="footer" /></a><p className="footer-copy">{business.slogan}. İhtiyacınız olduğunda bilgi almak için bize ulaşın.</p></div><div><h3>Hızlı Bağlantılar</h3><a href="#hizmetler">Hizmetlerimiz</a><a href="#hakkimizda">Nasıl Çalışıyoruz?</a><a href="#sss">Sık Sorulan Sorular</a><a href="/gizlilik">Gizlilik Politikası</a><a href="/kvkk">KVKK Aydınlatma Metni</a></div><div><h3>İletişim</h3><a href={business.phoneHref}><Phone size={15} /> {business.phoneDisplay}</a><a href={`mailto:${business.email}`}><Mail size={15} /> {business.email}</a></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} {business.name}</span><span>Bilgiler iletişim öncesi doğrulanmalıdır.</span></div></footer>;
}
