'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Phone } from 'lucide-react';
import { business } from '@/data/business';
import { services } from '@/data/services';
import { Button } from '../ui/Button';
import { SectionHeading } from '../ui/SectionHeading';

export function Services() {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const active = services[activeIndex];
  const Icon = active.icon;

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % services.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const tab = tabRefs.current[activeIndex];
    const container = tab?.closest('.service-tabs');

    if (!tab || !(container instanceof HTMLElement)) return;

    const tabStart = tab.offsetLeft;
    const tabEnd = tabStart + tab.offsetWidth;
    const visibleStart = container.scrollLeft;
    const visibleEnd = visibleStart + container.clientWidth;

    if (tabStart < visibleStart) {
      container.scrollTo({ left: tabStart - 8, behavior: 'smooth' });
    } else if (tabEnd > visibleEnd) {
      container.scrollTo({ left: tabEnd - container.clientWidth + 8, behavior: 'smooth' });
    }
  }, [activeIndex]);

  return (
    <section id="hizmetler" className="section services">
      <div className="container">
        <SectionHeading
          eyebrow="Hizmetlerimiz"
          title="İhtiyacınız olan çözüm, tek bir telefon kadar yakın."
          description=""
        />

        <div className="service-tabs" role="tablist" aria-label="Hizmetler">
          <div className="service-tabs-track">
            {services.map((service, index) => {
              const TabIcon = service.icon;

              return (
                <button
                  key={service.title}
                  className={index === activeIndex ? 'service-tab active' : 'service-tab'}
                  ref={(element) => { tabRefs.current[index] = element; }}
                  type="button"
                  role="tab"
                  aria-selected={index === activeIndex}
                  onClick={() => setActiveIndex(index)}
                >
                  <TabIcon size={17} aria-hidden="true" />
                  <span>{service.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="service-showcase">
          <div className="service-image">
            <Image
              key={active.image}
              src={active.image}
              alt={`${active.title} hizmeti`}
              fill
              sizes="(max-width: 900px) 100vw, 58vw"
              priority={activeIndex === 0}
            />
            <div className="service-image-shade" />
            <div className="service-slide-count">
              <b>0{activeIndex + 1}</b>
              <span>/ 0{services.length}</span>
            </div>
          </div>

          <div className="service-detail">
            <div>
              <span className="service-detail-kicker">
                <Icon size={16} /> Hizmet detayları
              </span>
              <h3>{active.title}</h3>
              <p>{active.description}</p>
            </div>

            <div className="service-detail-bottom">
              <Button href={business.phoneHref} variant="primary">
                <Phone size={16} /> Bilgi Al
              </Button>
              <span className="service-next">
                Otomatik geçiş <ArrowRight size={16} />
              </span>
            </div>
          </div>
        </div>

        <div className="service-progress" aria-hidden="true">
          <span style={{ width: `${((activeIndex + 1) / services.length) * 100}%` }} />
        </div>
      </div>
    </section>
  );
}
