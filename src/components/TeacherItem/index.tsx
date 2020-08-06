import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css'

function TeacherItem(){
    return(
        <article className="teacher-item">
                    <header>
                        <img src="https://avatars2.githubusercontent.com/u/65607825?s=400&u=bca58e2317ab740ffdd7d00d82c4d97fb12103c3&v=4" alt="Micaely Gusmão" />
                        <div>
                            <strong> Micaely Gusmão</strong>
                            <span> JavaScript </span>
                        </div>
                    </header>

                    <p>
                        Estudante de análise e desenvolvimento de sistemas.

                        <br /> <br />
                        Apaixonada por programação e por ensinar. Amante de futebol e música. Quebrando muito a cabeça com esse NLW, tenho que faze corredo e isso só dificulta a minha vida.
                    </p>

                    <footer>
                        <p>
                            Preço/hora
                            <strong> R$ 50,00 </strong>
                        </p>
                        <button type="button">
                            <img src={whatsappIcon} alt="whatsapp" />
                            Entrar em contato
                        </button>
                    </footer>
                </article>
    );
    
}

export default TeacherItem;