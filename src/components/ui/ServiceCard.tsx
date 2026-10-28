import { Phone } from 'lucide-react';
import { business } from '@/data/business';
import type { Service } from '@/data/services';
import { Button } from './Button';
export function ServiceCard({ service }: { service: Service }) { const Icon = service.icon; return <article className="service-card"><div className="icon-box"><Icon aria-hidden="true" size={25} /></div><h3>{service.title}</h3><p>{service.description}</p><Button href={business.phoneHref} variant="outline"><Phone size={16} aria-hidden="true" /> Bilgi Al</Button></article>; }
