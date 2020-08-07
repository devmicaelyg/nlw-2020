import React from 'react';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';

import './styles.css';

const TeacherList = () => {
    return(
       <div id="page-teacher-list" className="conteiner">
           <PageHeader title="Esses são os proffys disponiveis.">

             <form id="search-teachers">
             <Select
                     name="subject" 
                     label="Matéria"
                     options = {[
                         {value: 'JavaScript', label: 'Javascript'},
                         {value: 'NodeJS', label: 'NodeJS'},
                         {value: 'ReactJS', label: 'ReactJS'},
                         {value: 'React Native', label: 'React Native'},
                         {value: 'Angular 9', label: 'Angular 9'},
                         {value: 'Typescript', label: 'Typescript'},
                     ]}
                     />

                <Select
                     name="week_day" 
                     label="Dia da semana"
                     options = {[
                         {value: 'Domingo', label: 'Domingo'},
                         {value: 'Segunda-feira', label: 'Segunda-feira'},
                         {value: 'Terça-feira', label: 'Terça-feira'},
                         {value: 'Quarta-feira', label: 'Quarta-feira'},
                         {value: 'Quinta-feira', label: 'Quinta-feira'},
                         {value: 'Sexta-feira', label: 'Sexta-feira'},
                         {value: 'Sábado', label: 'Sábado'},
                     ]}
                     />
                <Input type="time" name="time" label="Horário"/>
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