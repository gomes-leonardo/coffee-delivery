import React, { useState, createContext, useContext, ReactNode } from 'react'

interface FormData {
  cep: string
  rua: string
  numero: string
  complemento: string
  bairro: string
  cidade: string
  uf: string
  paymentMethod: string
}

interface CartContextType {
  formData: FormData | null
  setFormData: (data: FormData) => void
}

const FormContext = createContext<CartContextType>({
  formData: null,
  setFormData: () => {},
})

export const useFormContext = () => useContext(FormContext)

export const FormProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [formData, setFormData] = useState<FormData | null>(null)
  return (
    <FormContext.Provider
      value={{
        formData,
        setFormData,
      }}
    >
      {children}
    </FormContext.Provider>
  )
}
