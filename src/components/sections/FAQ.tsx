import { faq } from '@/data/faq';
import { SectionHeading } from '../ui/SectionHeading';
export function FAQ() { return <section id="sss" className="section faq"><div className="container faq-grid"><SectionHeading eyebrow="Merak edilenler" title="Sık sorulan sorular" description="Bilinmeyen ayrıntıları kesin bilgi gibi sunmuyoruz. En güncel bilgi için iletişime geçebilirsiniz." /><div className="faq-list">{faq.map(item => <details key={item.question}><summary>{item.question}<span>+</span></summary><p>{item.answer}</p></details>)}</div></div></section>; }
