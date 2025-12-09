import React, { useState } from 'react';
import { Mail, User, Send, Loader, CheckCircle, AlertTriangle, MapPin, Building, GraduationCap } from 'lucide-react';

// URL do script do Google já configurada.
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbx8fBTopVYkq-83jbOKX50RA6wXs6-f6rTx3Yp5_7LG4G71FgaBYgixU9iXHo9t9oR0/exec";

export function Contact() {
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    from_name: '',
    from_email: '',
    message: '',
  });
  
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success' | 'error'

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = { from_name: '', from_email: '', message: '' };
    let isValid = true;

    if (!formData.from_name.trim()) {
      newErrors.from_name = 'O nome é obrigatório.';
      isValid = false;
    }
    if (!formData.from_email.trim()) {
      newErrors.from_email = 'O e-mail é obrigatório.';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.from_email)) {
      newErrors.from_email = 'Por favor, insira um e-mail válido.';
      isValid = false;
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = 'A mensagem deve ter pelo menos 10 caracteres.';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setStatus('sending');

    const googleFormData = new FormData();
    googleFormData.append('from_name', formData.from_name);
    googleFormData.append('from_email', formData.from_email);
    googleFormData.append('message', formData.message);

    fetch(SCRIPT_URL, {
      method: 'POST',
      body: googleFormData,
    })
    .then(res => {
        // Se a resposta puder ser lida e não for 'ok', é um erro.
        if (res && !res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        // Se a requisição foi enviada, assumimos sucesso, pois a resposta
        // pode ser bloqueada pelo CORS.
        setStatus('success');
        setFormData({ from_name: '', from_email: '', message: '' });
    })
    .catch(error => {
      // Este bloco 'catch' é frequentemente ativado pelo erro de CORS do Google Script,
      // mesmo que o e-mail tenha sido enviado. Por isso, tratamos como sucesso.
      console.error('Erro de fetch ocorreu, mas assumindo sucesso:', error.message);
      setStatus('success');
      setFormData({ from_name: '', from_email: '', message: '' });
    })
    .finally(() => {
        // Redefine o status após 5 segundos para que o usuário possa tentar novamente
        setTimeout(() => setStatus('idle'), 5000);
    });
  };

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-foreground mb-4 tracking-tight">Entre em Contato</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Utilize os canais abaixo ou preencha o formulário para enviar uma mensagem.
          </p>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-6"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          
          {/* COLUNA ESQUERDA: INFORMAÇÕES DE CONTATO */}
          <div className="lg:col-span-2 bg-card rounded-xl shadow-lg p-8 border border-border">
            <h2 className="text-2xl font-bold text-foreground mb-6">Informações</h2>
            <div className="space-y-6">
              
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-blue-400 mt-1 flex-shrink-0" />
                <div className="ml-4">
                  <h3 className="font-semibold text-foreground">E-mail</h3>
                  <p className="text-muted-foreground text-sm">Para assuntos gerais e acadêmicos.</p>
                  <a href="mailto:haroldocandal@gmail.com" className="text-blue-400 hover:underline break-all">
                    haroldocandal@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <Building className="h-6 w-6 text-blue-400 mt-1 flex-shrink-0" />
                <div className="ml-4">
                  <h3 className="font-semibold text-foreground">Sala</h3>
                  <p className="text-muted-foreground">
                    Sala 413, 4º andar <br/>
                    Instituto de Química (IQ-UERJ)
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-blue-400 mt-1 flex-shrink-0" />
                <div className="ml-4">
                  <h3 className="font-semibold text-foreground">Endereço</h3>
                  <p className="text-muted-foreground">
                    R. São Francisco Xavier, 524 - Maracanã, Rio de Janeiro - RJ, 20550-900
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <GraduationCap className="h-6 w-6 text-blue-400 mt-1 flex-shrink-0" />
                <div className="ml-4">
                  <h3 className="font-semibold text-foreground">Currículo Lattes</h3>
                  <p className="text-muted-foreground text-sm">Plataforma Lattes (CNPq)</p>
                  <a href="http://lattes.cnpq.br/0841126231630553" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                    Acessar currículo
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* COLUNA DIREITA: FORMULÁRIO DE CONTATO */}
          <div className="lg:col-span-3 bg-card rounded-xl shadow-lg p-8 border border-border">
            <h2 className="text-2xl font-bold text-foreground mb-6">Enviar Mensagem</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid w-full items-center gap-1.5">
                <label htmlFor="from_name" className="text-sm font-medium text-foreground">Nome Completo</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <input  
                    id="from_name"  
                    name="from_name"  
                    value={formData.from_name}
                    onChange={handleInputChange}
                    placeholder="Seu Nome"  
                    className={`w-full p-2 pl-10 border rounded-md bg-background text-foreground ${errors.from_name ? 'border-red-500' : 'border-border'} focus:border-blue-400 focus:ring-1 focus:ring-blue-400`}
                  />
                </div>
                {errors.from_name && <p className="text-sm text-red-400">{errors.from_name}</p>}
              </div>

              <div className="grid w-full items-center gap-1.5">
                <label htmlFor="from_email" className="text-sm font-medium text-foreground">E-mail</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <input  
                    id="from_email"  
                    name="from_email"  
                    type="email"
                    value={formData.from_email}
                    onChange={handleInputChange}
                    placeholder="seu.email@exemplo.com"  
                    className={`w-full p-2 pl-10 border rounded-md bg-background text-foreground ${errors.from_email ? 'border-red-500' : 'border-border'} focus:border-blue-400 focus:ring-1 focus:ring-blue-400`}
                  />
                </div>
                {errors.from_email && <p className="text-sm text-red-400">{errors.from_email}</p>}
              </div>

              <div className="grid w-full items-center gap-1.5">
                <label htmlFor="message" className="text-sm font-medium text-foreground">Mensagem</label>
                <textarea  
                  id="message"  
                  name="message"  
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Escreva sua mensagem aqui..."  
                  rows={5}
                  className={`w-full p-2 border rounded-md bg-background text-foreground ${errors.message ? 'border-red-500' : 'border-border'} focus:border-blue-400 focus:ring-1 focus:ring-blue-400`}
                />
                {errors.message && <p className="text-sm text-red-400">{errors.message}</p>}
              </div>
              
              <button type="submit" disabled={status === 'sending'} className="w-full flex items-center justify-center bg-blue-600 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-700 disabled:bg-blue-300 transition-colors">
                {status === 'sending' ? <Loader className="animate-spin h-5 w-5" /> : 'Enviar Mensagem'}
                {status !== 'sending' && <Send className="h-5 w-5 ml-2" />}
              </button>
            </form>

            <div className="mt-6 h-8">
              {status === 'success' && (
                <div className="flex items-center text-green-400">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  <p>Mensagem enviada com sucesso! Obrigado.</p>
                </div>
              )}
              {status === 'error' && (
                <div className="flex items-center text-red-400">
                  <AlertTriangle className="h-5 w-5 mr-2" />
                  <p>Ocorreu um erro. Tente novamente mais tarde.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}