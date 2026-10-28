import { PhoneCall, MapPin, ReceiptText, CalendarCheck } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';
const steps = [{ n: '01', title: 'Bizi arayın', icon: PhoneCall }, { n: '02', title: 'Konumunuzu paylaşın', icon: MapPin }, { n: '03', title: 'Bilgi alın', icon: ReceiptText }, { n: '04', title: 'Hizmeti planlayın', icon: CalendarCheck }];
export function HowItWorks() { return <section className="section process"><div className="container"><SectionHeading eyebrow="Nasıl çalışıyoruz?" title="Dört basit adımda iletişim." /><div className="process-grid">{steps.map(({ n, title, icon: Icon }) => <div className="step" key={n}><span className="step-number">{n}</span><Icon /><h3>{title}</h3></div>)}</div></div></section>; }
