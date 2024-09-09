import React from 'react'
import farmapronto from './../assets/farmaprontowhite.png'

export const Footer = () => {
  return (
    <footer>
        <div>
            <img src={farmapronto} className='img_logo_footer'/>
            <h3>Contacto</h3>
            <ul>
                <li><b>Telefono:</b> <span>55 5733 7111 Ext. 301</span></li>
                <li><b>WhatsApp Admin:</b> <span>55 1925 1022</span></li>
                <li><b>WhatsApp Sistemas:</b> <span>55 3252 1547</span></li>
                <li>asociasion@farmaprontocentro.com</li>
                <li>contabilidad.emprendedores@farmaprontocentro.com</li>
            </ul>
            <h3>Dirección</h3>
            <p>Calle 17 #8 2do piso.</p>
            <p>Col, Las Aguilas, 57900</p>
            <p>Nezahualcoyotl, Edo. Mex.</p>

        </div>
        <div>
            <h3>INFORMACIÓN</h3>
            <b>Horario de Atención</b>
            <p>Lunes a Viernes: de 9:00 a.m a 6:00 p.m.</p>
            <p>Sabados: de 9:00 a.m a 2:00 p.m.</p>

            <b>Horario de Atención Sistemas</b>
            <p>Lunes a Viernes: de 9:00 a.m a 6:00 p.m.</p>
            <p>Sabados: de 9:00 a.m a 2:00 p.m.</p>
            <p>Por WhatsApp de 8:00 a.m. a 10:00 p.m.</p>

        </div>
        <div>
            <h3>PROXIMOS EVENTOS</h3>
            <ol>
                <li><q>Curso de capacitación por nadro</q> 23 y 24 de septiembre</li>
                <li><q>Junta general </q> 26 de septiembre</li>
                
            </ol>
        </div>
    </footer>
  )
}
