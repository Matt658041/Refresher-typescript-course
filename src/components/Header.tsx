import { type ReactNode} from 'react';

type HeaderProps = { 
    image: { src: string; alt: string };
    children: ReactNode
};  

function Header({ image, children }: HeaderProps) {
  return (
    <header>
          <img src={image.src} alt={image.alt} />
          {children}
    </header>
  )
}

export default Header