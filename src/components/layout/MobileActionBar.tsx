import { MessageCircle, Phone } from 'lucide-react';
import { business } from '@/data/business';
export function MobileActionBar() { return <div className="mobile-actions"><a href={business.phoneHref}><Phone size={18} aria-hidden="true" /> Hemen Ara</a><a href={business.whatsappHref} target="_blank" rel="noopener noreferrer"><MessageCircle size={18} aria-hidden="true" /> WhatsApp</a></div>; }
