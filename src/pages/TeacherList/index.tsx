import React from 'react';

import './styles.css';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';


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
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
            </main>
       </div>
    );
}

export default TeacherList;