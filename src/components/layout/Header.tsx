'use client';
import { useState } from 'react';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { business } from '@/data/business';
import { Button } from '../ui/Button';
import { BusinessLogo } from '../ui/BusinessLogo';

export function Header() {
  const [open, setOpen] = useState(false);
  const links = [['Ana Sayfa', '#ana-sayfa'], ['Hizmetlerimiz', '#hizmetler'], ['Hakkımızda', '#hakkimizda'], ['İletişim', '#iletisim']];

  return <header className="site-header"><div className="container header-inner"><a className="logo" href="#ana-sayfa" aria-label={business.name}><BusinessLogo /></a><nav className={open ? 'nav open' : 'nav'} aria-label="Ana menü">{links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}<Button href={business.whatsappHref} variant="dark" external><MessageCircle size={16} aria-hidden="true" /> WhatsApp</Button><Button href={business.phoneHref} variant="primary"><Phone size={16} aria-hidden="true" /> Hemen Ara</Button></nav><button className="menu-button" aria-label={open ? 'Menüyü kapat' : 'Menüyü aç'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button></div></header>;
}
