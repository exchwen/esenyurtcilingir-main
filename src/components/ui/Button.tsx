import Link from 'next/link';
import type { ReactNode } from 'react';
type Props = { href: string; children: ReactNode; variant?: 'primary' | 'dark' | 'outline'; className?: string; external?: boolean };
export function Button({ href, children, variant = 'primary', className = '', external }: Props) { const classes = `button button-${variant} ${className}`; return external ? <a className={classes} href={href} target="_blank" rel="noopener noreferrer">{children}</a> : <Link className={classes} href={href}>{children}</Link>; }
