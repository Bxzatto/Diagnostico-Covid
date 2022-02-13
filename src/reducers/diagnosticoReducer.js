import { RESET_STATE, SET_USER, SET_WELCOME_MESSAGE } from "../actions/diagnosticoActions";


const INITIAL_STATE = {
    usuario: {
        nome: '',
        idade: '',
        genero: ''
    },
    welcomeMessage: 'Informe seu nome abaixo'
}

export default function diagnosticoReducer(state = INITIAL_STATE, action) {

    console.log(state)
    switch (action.type) {

        case RESET_STATE: {
            return INITIAL_STATE
        }

        case SET_USER: {

            return {
                ...state,
                usuario: {
                    nome: action.value.nome,
                    idade: action.value.idade,
                    genero: action.value.genero
                }
            }
        }

        case SET_WELCOME_MESSAGE: {

            let welcomeMessageTmp = ""

            switch (action.value.genero) {

                case 'Feminino':
                    console.log('aquiiii')
                    welcomeMessageTmp = "Bem vinda, "+ action.value.nome;
                    break;

                case 'Masculino':
                    welcomeMessageTmp = "Bem vindo, "+ action.value.nome;
                    break;

                case 'Não-binário':
                    welcomeMessageTmp = "Bem vinde, "+ action.value.nome;
                    break;

                default:
                    welcomeMessageTmp = 'Informe seu nome abaixo'

            }

            return {
                ...state,
                welcomeMessage: welcomeMessageTmp
            }

            
        }
        default: {
                return state
            }
    }
}