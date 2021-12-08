import './index.css'

const form = document.getElementById('form')

const valorPresente = document.getElementById('valorPresente')
const valorPresenteInfoError = document.getElementById('valorPresenteInfoError')

const interesPeriodo = document.getElementById('interesPeriodo')
const interesPeridoInfoError = document.getElementById(
  'interesPeriodoInfoError'
)

const numeroTotalPeridos = document.getElementById('numeroTotalPeridos')
const numeroTotalPeridosInfoError = document.getElementById(
  'numeroTotalPeridosInfoError'
)

const valorFuturo = document.getElementById('valorFuturo')

const field = {
  valorPresente: false,
  interesPeriodo: false,
  numeroTotalPeridos: false,
}

const spressions = {
  valorPresente: /^[1-9]+[0-9]*$/,
  interesPeriodo: /^0\.\d*$/,
  totalPeriodos: /^[1-9]+[0-9]*$/,
}

const fieldValidate = (spressions, input, inputError, e) => {
  if (spressions.test(e.value)) {
    input.classList.remove('invalidateForm')
    input.classList.add('validateForm')
    inputError.classList.remove('invalidate')
    field[input.id] = true
  } else {
    input.classList.remove('validateForm')
    input.classList.add('invalidateForm')
    inputError.classList.add('invalidate')
    field[input.id] = false
  }
}

const formValidate = (e) => {
  switch (e.target.id) {
    case 'valorPresente':
      fieldValidate(
        spressions.valorPresente,
        valorPresente,
        valorPresenteInfoError,
        e.target
      )
      break
    case 'interesPeriodo':
      fieldValidate(
        spressions.interesPeriodo,
        interesPeriodo,
        interesPeridoInfoError,
        e.target
      )
      break
    case 'numeroTotalPeridos':
      fieldValidate(
        spressions.totalPeriodos,
        numeroTotalPeridos,
        numeroTotalPeridosInfoError,
        e.target
      )
      break
  }
}

form.addEventListener('keyup', formValidate)

form.addEventListener('submit', (e) => {
  e.preventDefault()

  if (field.valorPresente && field.interesPeriodo && field.numeroTotalPeridos) {
    const vf =
      parseInt(valorPresente.value) *
      Math.pow(
        1 + parseFloat(interesPeriodo.value),
        parseInt(numeroTotalPeridos.value)
      )

    valorFuturo.innerText = vf.toFixed(4).toString()
  }
})
