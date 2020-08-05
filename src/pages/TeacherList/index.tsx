import React from 'react';

import './styles.css';
import PageHeader from '../../components/PageHeader';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

const TeacherList = () => {
    return(
       <div id="page-teacher-list" className="conteiner">
           <PageHeader title="Esses são os proffys disponiveis.">

             <form id="search-teachers">
                <div className="input-block">
                 <label htmlFor="subject"> Matéria </label>
                 <input type ="text" id="subject" /> 
                </div>

                <div className="input-block">
                 <label htmlFor="week_day"> Dia da semana </label>
                 <input type ="text" id="week_day" /> 
                </div>

                <div className="input-block">
                 <label htmlFor="time"> Horário </label>
                 <input type ="text" id="time" /> 
                </div>
            </form>
            </PageHeader>

            <main>
                <article className="teacher-item">
                    <header>
                        <img src="https://avatars2.githubusercontent.com/u/65607825?s=460&u=bca58e2317ab740ffdd7d00d82c4d97fb12103c3&v=4" alt="Micaely Gusmão" />
                        <div>
                            <strong> Micaely Gusmão</strong>
                            <span> JavaScript </span>
                        </div>
                    </header>

                    <p>
                        Estudante de análise e desenvolvimento de sistemas.

                        <br /> <br />
                        Apaixonada por programação e por ensinar. Amante de futebol e música. 
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
            </main>
       </div>
    );
}

export default TeacherList;