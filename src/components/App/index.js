import React from 'react'
import './index.scss';

import Header from '../Header';
import TaskList from '../TaskList'
import Form from '../Form';

import initialTasks from '../../data/tasks';

// class principale de mon application
class App extends React.Component
{
    // state de mon app
    state = {

        tasks: initialTasks, // liste de tâches 
        newTaskvalue: '', // valeur de mon input
    };
    
    // fonction qui va permettre de modifier mon input
    setTaskValue = (newValue) => {

        // je modifie le state de l'app et plus particulièrement
        // le contenu de newTaskvalue
        this.setState({
            newTaskvalue: newValue
        })
    };

    // fonction permettant de cocher une tâche
    setDoneTask = (newValue , taskId) => {

        // je récupére la liste de tâche avec du destructuring
        const { tasks } = this.state

        // newTasksList va contenir le résultat de la fonction
        // suivante : Je parcours mon tableau de tâches et
        // lorsque je trouve la tache qui a l'id fournie
        // en paramètre, je retourne la tache modifiée
        const newTasksList = tasks.map(task => {
            if (task.id === taskId) {
                return {
                    ...task,
                    done: newValue
                }
            }

            // si l'id fournie ne correspond pas a l'id de la tâche de mon tableau de taches, alors je retourne la tâche telle qu'elle est sans modifications.
            return task;
        }) 

        // je modifie mon state afin de générer un nouvelle affichage
        this.setState({
            tasks: newTasksList
        })
    }

    // fonction d'ajout d'une tâche
    addTask = () => {

        // je récupère toutes mes tâches actuelles
        const { tasks, newTaskvalue } = this.state;

        // je récupère tous les Id de mes tâche afin de trouver
        // le plus grand d'entre eux et lui ajouté 1 pour l'attribuer
        // par la suite à ma nouvelle tâche
        const allIds = tasks.map(task => task.id);
        const nextId = Math.max(...allIds) + 1;

        // je décris ma nouvelle tâche
        const newTask = {
            id:  nextId,
            label: newTaskvalue,
            done: false
        };

        // je met à jour mon state en ajoutant la nouvelle
        // tâche et en vidant l'input de saisie de nouvelle tâche
        this.setState({
            tasks: [...tasks, newTask],
            newTaskvalue: ''
        })

        

    };


    // fonction de rendu
    render() {

        // destructuring du state dans le but de recupérer les valeurs
        const { tasks, newTaskvalue } = this.state;

        return(
            // je renvoie une div qui contient des composent à qui je passe des props.
            <div className="app">
                <Header />
                <TaskList 
                    allTasks={tasks}
                    checkTask={this.setDoneTask}
                />
                <Form 
                    newTaskLabel={newTaskvalue}
                    handleChange={this.setTaskValue}
                    newTaskSent={this.addTask}
                />
                
            </div>

        )
    };
}

export default App;