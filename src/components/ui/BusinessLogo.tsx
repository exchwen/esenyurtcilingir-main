import Image from 'next/image';

type Props = { size?: 'header' | 'footer' };

export function BusinessLogo({ size = 'header' }: Props) {
  return <Image className={`business-logo business-logo-${size}`} src="/images/esenyurt-acil-cilingir-logo.png" alt="Esenyurt Acil Çilingir — Güvenliğiniz Bizim İşimiz" width={760} height={250} priority={size === 'header'} />;
}
