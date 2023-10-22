 export const formData = [
    {
      placeholder: 'Full Name',
      for: 'name-input',
      text: 'Name: ',
      type: 'text',
      id: 'name',
      pattern: "^[A-Za-z]{3-50}$",
    },
    {
      placeholder: 'Email',
      for: 'email-input',
      text: 'Email: ',
      type: 'email',
      id: 'email',
      error: 'It should be a valid email address.',
      pattern: ''
    },
    {
      placeholder: 'mm/dd/yyyy',
      for: 'birthday-input',
      text: 'Birthday: ',
      type: 'date',
      id: 'birthday',
      pattern: ''
    }
  ]