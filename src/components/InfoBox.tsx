import type { ReactNode } from 'react';


type InfoBoxProps = {
    mode: 'hint' | 'warning',
    children: ReactNode;
}


function InfoBox({ mode, children }: InfoBoxProps) {
    if (mode === 'hint') {
  return (
      <aside className='info-box infobox-hint' >

          <p>{children}</p>

 </aside>
  )
    }
    return (
        <aside className='info-box infobox-warning warning--medium'>
            <h2>Warning</h2>
            <p>{children}</p>
        </aside>
    )
}

export default InfoBox