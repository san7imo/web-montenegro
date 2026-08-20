export type FormSubmissionStatus = 'idle' | 'submitting' | 'success' | 'error'

export class FormSubmissionError extends Error {
  status: number | null

  constructor(message: string, status: number | null = null) {
    super(message)
    this.name = 'FormSubmissionError'
    this.status = status
  }
}

function getErrorMessage(status: number) {
  if (status === 400 || status === 422) {
    return 'Revisa los datos del formulario e inténtalo de nuevo.'
  }

  if (status === 429) {
    return 'Se han realizado demasiados envíos. Espera unos minutos e inténtalo de nuevo.'
  }

  return 'No pudimos enviar la información. Inténtalo de nuevo en unos minutos.'
}

export async function submitFormspreeForm(endpoint: string, formData: FormData) {
  let response: Response

  try {
    response = await fetch(endpoint, {
      method: 'POST',
      body: formData,
      headers: {
        Accept: 'application/json',
      },
    })
  } catch {
    throw new FormSubmissionError(
      'No pudimos conectar con el servicio de envío. Comprueba tu conexión e inténtalo de nuevo.',
    )
  }

  if (!response.ok) {
    throw new FormSubmissionError(getErrorMessage(response.status), response.status)
  }
}

