import { LightningElement } from 'lwc';

export default class QuizApp extends LightningElement {

    myQuestions=[
    {
        id:'question1',
        question:'which of the following is not a template loop?',
        answers:{
            a:'for-each',
            b:'iterator',
            c:'map-loop',
            d:'Dont no'
        },
        correctAnswer:'c'
    },
    {
        id:'question2',
        question:'which of the file is invalid in LWC folder?',
        answers:{
            a:'.svg',
            b:'.apex',
            c:'.js',
            d:'Dont no'
        },
        correctAnswer:'b'
    },
    {
        id:'question3',
        question:'which of the following is not a directive?',
        answers:{
            a:'for-each',
            b:'if:True',
            c:'@track',
            d:'Dont no'
        },
        correctAnswer:'c'
    },
    {
        id:'question4',
        question:'Who is your favourite hero?',
        answers:{
            a:'Bhaai',
            b:'Pawankalyan',
            c:'Prabhas',
            d:'Mahesh babu'
        },
        correctAnswer:'d'
    }
    ]

    submittedAnswers={}                        // for storing answers

    correctAnswers = 0;                        // to show the number of correct answers
    isSubmitted = false                        // used to show the result

    // this will call on every click on the options
    handleChange(event)
    {
        console.log('name' , event.target.name),
        console.log('value' , event.target.value)
        const {name, value} = event.target
        this.submittedAnswers = {...this.submittedAnswers, [name]:value}
    }
    // for disabling the submit button if all the options are not selected
    get allNotSelected()
    {
        return !(Object.entries(this.submittedAnswers).length === this.myQuestions.length)
    }
    // form submit handler
    submitHandler(event)
    {
        event.preventDefault()                                     // this will prevent refreshing the page
        let correct = this.myQuestions.filter(item=>this.submittedAnswers[item.id] === item.correctAnswer)
        this.correctAnswers = correct.length
        console.log('this.correctAnswers :' ,this.correctAnswers)
        this.isSubmitted = true;
    }
    // for applying dynamic styling to our result
    get isScoredFull()
    {
        return `slds-text-heading_large ${this.myQuestions.length === this.correctAnswers?
        'slds-text-color_success':'slds-text-color_error'}`
    }

    // form reset handler
    resetHandler()
    {
        this.submittedAnswers={}
        
        this.isSubmitted = false
    }
    
   


}














