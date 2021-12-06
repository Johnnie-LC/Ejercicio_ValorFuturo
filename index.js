const form = document.getElementById('form')

const vp = document.getElementById('vp')
const vpInfoError = document.getElementById('vp-info-error')

const ip = document.getElementById('ip')
const ipInfoError = document.getElementById('ip-info-error')

const ntp = document.getElementById('ntp')
const ntpInfoError = document.getElementById('ntp-info-error')

const valorFuturo = document.getElementById('value')

const field = {
  vp: false,
  ip: false,
  ntp: false,
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
    console.log(`field.${input}`, field[input.id])
  } else {
    input.classList.remove('validateForm')
    input.classList.add('invalidateForm')
    inputError.classList.add('invalidate')
    field[input.id] = false
    console.log(`field.${input.id}`, field[input.id])
  }
}

const formValidate = (e) => {
  switch (e.target.id) {
    case 'vp':
      fieldValidate(spressions.valorPresente, vp, vpInfoError, e.target)
      break
    case 'ip':
      fieldValidate(spressions.interesPeriodo, ip, ipInfoError, e.target)
      break
    case 'ntp':
      fieldValidate(spressions.totalPeriodos, ntp, ntpInfoError, e.target)
      break
  }
}

form.addEventListener('keyup', formValidate)

form.addEventListener('submit', (e) => {
  e.preventDefault()

  if (field.vp && field.ip && field.ntp) {
    const vf =
      parseInt(vp.value) *
      Math.pow(1 + parseFloat(ip.value), parseInt(ntp.value))

    valorFuturo.innerText = vf.toString()
    // form.reset()
  }
})
