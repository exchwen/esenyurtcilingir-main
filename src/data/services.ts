import { Car, KeyRound, LockKeyhole, Building2, Copy } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export type Service = { title: string; description: string; icon: LucideIcon; image: string };
export const services: Service[] = [
  { title: 'Konut Çilingiri', description: 'Kapı açma ve kilit değişimi ihtiyaçlarınız için bilgi alın.', icon: LockKeyhole, image: '/images/services/konut-cilingir.png' },
  { title: 'Oto Çilingir', description: 'Araç kilidi ve anahtar hizmetleri hakkında iletişime geçin.', icon: Car, image: '/images/services/oto-cilingir.png' },
  { title: 'İşyeri Çilingiri', description: 'Ofis, dükkân ve depo kilit çözümleri için destek.', icon: Building2, image: '/images/services/isyeri-cilingir.png' },
  { title: 'Kilit Sistemleri', description: 'Kilit montajı, bakım ve değişimi seçeneklerini görüşün.', icon: KeyRound, image: '/images/services/kilit-sistemleri.png' },
  { title: 'Anahtar Çoğaltma', description: 'Anahtar kopyalama hizmeti için güncel bilgi alın.', icon: Copy, image: '/images/services/anahtar-cogaltma.png' },
];
