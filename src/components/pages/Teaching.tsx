import React, { useState, ReactNode } from 'react';
import { Book, FileText, ExternalLink, Calendar, ClipboardList, Video, ChevronRight, CheckCircle, Clock, AlertCircle } from 'lucide-react';

// URL do vídeo de fundo
const videoUrl = 'https://i.imgur.com/V8QPsf9.mp4';

// O componente AccordionItem não é mais necessário e foi removido.

export function Teaching() {
  const [activeTab, setActiveTab] = useState('termodinamica');

  // ===================================================================
  // 2. ESTRUTURA DE DADOS
  // ===================================================================
  const subjects = {
    termodinamica: {
      title: 'Termodinâmica',
      description: 'Estudo das leis fundamentais que governam as transformações de energia e matéria...',
      icon: '🌡️',
      goodnotesUrl: 'https://web.goodnotes.com/s/fMnXbsgyngGqm7On4V88ON',
      bibliografia: [
        'ATKINS , P.; DE PAULA, J. Físico química: volume 1. [s.l.] Ltc-Livros Tecnicos E Cientificos Editora Lda, 2017.',
        'LEVINE, I. N. Físico Química. [s.l.] Ltc-Livros Tecnicos E Cientificos Editora Lda, 1970.'
      ],
      datas: {
        P1: '01 de outubro de 2025 7:00',
        P2: '28 de novembro de 2025 8:50',
        PR: '3 de dezembro de 2025 7:00',
        PF: '10 de dezembro de 2025 7:00'
      },
      exercicios: [
        { title: '1. Gases Perfeitos', url: 'https://lqtsm.notion.site/Lista-de-Exerc-cios-Gases-Perfeitos-1878e483182a806395f4f004931b1ab0?pvs=74' },
        { title: '2. Gases Reais', url: 'https://lqtsm.notion.site/Lista-de-Exerc-cios-Gases-Reais-1878e483182a806391e1eb983dfb5b6c?source=copy_link' },
        { title: '3. Primeira Lei, Energia Interna e Entalpia', url: 'https://lqtsm.notion.site/Lista-de-Exerc-cios-Lei-Zero-Primeira-Lei-e-Entalpia-18a8e483182a80fd8b72f8cc8de44786?source=copy_link' },
        { title: '4. Termoquímica', url: 'https://lqtsm.notion.site/Lista-de-Exerc-cios-Termoqu-mica-1d38e483182a80aa9334ffff9103adb0?source=copy_link' },
        { title: '5. Entropia e segunda lei', url: 'https://lqtsm.notion.site/Lista-de-Exerc-cios-Segunda-Lei-1e18e483182a80d29d6eda0412e8094b?source=copy_link' },
        { title: '6. Terceira lei e entropias convencionais', url: 'https://lqtsm.notion.site/Lista-de-Exerc-cios-Terceira-Lei-e-Entropias-Convencionais-1ef8e483182a80caacc0e6c405b227ee?source=copy_link' },
        { title: '7. Energia livre', url: 'https://lqtsm.notion.site/Lista-de-Exerc-cios-Energia-Livre-1f78e483182a80c78047f4ac0df2b80a?source=copy_link' },
        { title: '8. Relações termodinâmicas', url: 'https://lqtsm.notion.site/Rela-es-Termodin-micas-2068e483182a80e29586ffe6500ecd58?source=copy_link' },
        { title: '9. Equilíbrio de fases', url: 'https://lqtsm.notion.site/Equil-brio-de-Fases-20e8e483182a802695e5f10ed55eb643?source=copy_link' },
        { title: '10. Equilíbrio químico', url: 'https://lqtsm.notion.site/Equil-brio-Qu-mico-20e8e483182a806ab5a3d04c9eb20fc9?source=copy_link' }
      ],
      materials: [
        { title: '1. Gases Perfeitos', url: '#' },
        { title: '2. Gases Reais', url: '#' },
        { title: '3. Primeira Lei, Energia Interna e Entalpia', url: '#' },
        { title: '4. Termoquímica', url: '#' },
        { title: '5. Entropia e segunda lei', url: '#' },
        { title: '6. Terceira lei e entropias convencionais', url: '#' },
        { title: '7. Energia livre', url: '#' },
        { title: '8. Relações termodinâmicas', url: '#' },
        { title: '9. Equilíbrio de fases', url: '#' },
        { title: '10. Equilíbrio químico', url: '#' }
      ]
    },
    eletricidade: {
        title: 'Eletricidade',
        description: 'Princípios fundamentais da eletrostática, eletrodinâmica e suas aplicações em sistemas químicos...',
        icon: '⚡',
        goodnotesUrl: 'https://web.goodnotes.com/s/pKC3GfC8Y60sMZnMoI9yEY#page-51',
        bibliografia: [
            'HALLIDAY, D. Fundamentos De Física - Eletromagnetismo - Volume Tres. 12. ed. Rio de Janeiro, RJ: Ltc-Livros Tecnicos E Cientificos Editora Lda, 2022.',
            'JEWETT, J. W. JR.; RAYMOND A. , S. Física para cientistas e engenheiros 3: eletricidade e magnetismo. [s.l.] Cengage Learning, 2021.'
        ],
        datas: {
            P1: '08 de Outubro de 2025 18:00',
            PR: '15 de Dezembro de 2025 18:00',
            PF: '17 de Dezembro de 2025 18:00'
        },
        exercicios: [
            { title: '1. Lei de Coulomb e Campo Elétrico', url: 'https://lqtsm.notion.site/Lei-de-Coulomb-e-Campo-El-trico-20a8e483182a80bb825dd4a386f8d7f6?source=copy_link' },
            { title: '2. Fluxo Elétrico e Lei de Gauss', url: 'https://lqtsm.notion.site/Fluxo-El-trico-e-Lei-de-Gauss-2138e483182a801a8f6ecd3e24bc0925?source=copy_link' },
            { title: '3. Potencial Elétrico', url: 'https://lqtsm.notion.site/Potencial-El-trico-2138e483182a80c89f6aca8539bea381?source=copy_link' },
            { title: '4. Capacitores e Dielétricos', url: 'https://lqtsm.notion.site/Capacitores-e-Diel-tricos-21e8e483182a801e915bca7f78fccaac?source=copy_link' },
            { title: '5. Corrente, Resistência e Potência', url: 'https://lqtsm.notion.site/Corrente-Resist-ncia-e-Pot-ncia-21e8e483182a8026b562ed28de1ba9cc?source=copy_link' },
            { title: '6. Circuitos Simples e Circuitos RC', url: 'https://lqtsm.notion.site/Circuitos-Simples-e-Circuitos-RC-21f8e483182a807cbcdfc48edc39b108?source=copy_link' },
            { title: '7. Campos Magnéticos', url: 'https://lqtsm.notion.site/Campo-Magn-tico-2788e483182a80d3a257f741de41f6e6?source=copy_link' },
        ],
        materials: [
            { title: '1. Lei de Coulomb e Campo Elétrico', url: 'https://drive.google.com/file/d/1t01Kr3DZS5do8kSpDdbResexYaOInw7B/view' },
            { title: '2. Fluxo Elétrico e Lei de Gauss', url: 'https://drive.google.com/file/d/1HlR5luLxjVkm9zEdG5jFX32Er5At_2EC/view' },
            { title: '3. Potencial Elétrico', url: 'https://drive.google.com/file/d/11bLZdlYlZuDSV6vk7Rv1yYYwxkZB6fse/view' },
            { title: '4. Capacitores e Dielétricos', url: 'https://drive.google.com/file/d/1yZ-JniXTQFOm1GPUdYGAoat97ceYn9Vp/view' },
            { title: '5. Corrente, Resistência e Potência', url: 'https://drive.google.com/file/d/1E63ACHEjibUxCuOs6m-JOmLlmXfZqnEw/view?usp=sharing' },
            { title: '6. Circuitos', url: 'https://drive.google.com/file/d/1k307mpzh8OVhI66LHxwNJ_A9DUKPgerH/view?usp=sharing' },
            { title: '7. Campos Magnéticos', url: 'https://drive.google.com/file/d/1cdzvdOuwexg10gTFDp6ECD5ouQHQ6-xG/view?usp=sharing' },
        ]
    },
    quantica: {
        title: 'Química Quântica',
        description: 'Introdução aos princípios da mecânica quântica aplicados a sistemas químicos...',
        icon: '⚛️',
        goodnotesUrl: '#', 
        bibliografia: [
            'MCQUARRIE, D. A. Quantum chemistry. 2nd ed ed. Sausalito (Calif.): University science books, 2008.',
            'LEVINE, I. N. Quantum chemistry. Seventh edition. ed. Boston: Pearson, 2014.',
        ],
        datas: {
            P1: '22 de setembro de 2025 16:00',
            P2: '17 de novembro de 2025 16:00',
            PR: '1 de dezembro de 2025 16:00',
            PF: '8 de dezembro de 2025 16:00'
        },
        exercicios: [
            { title: '1. Surgimento da Teoria Quântica', url: '#' },
            { title: '2. Equação Clássica de Ondas', url: '#' },
            { title: '3. Equação de Schrödinger e Partícula em uma Caixa', url: '#' },
            { title: '4. Postulados e Princípios da Mecânica Quântica', url: '#' },
            { title: '5. Oscilador Harmônico e Espectroscopia Vibracional', url: '#' },
            { title: '6. Rotor Rígido e Espectroscopia Rotacional', url: '#' },
            { title: '7. Espécies Hidrogenoides', url: '#' },
            { title: '8. Métodos de Aproximação', url: '#' },
            { title: '9. Átomos Multieletrônicos', url: '#' },
            { title: '10. Ligação Química: Espécies Moleculares Mono e Dieletrônicas', url: '#' }
        ],
        materials: [
            { title: '1. Surgimento da Teoria Quântica', url: '#' },
            { title: '2. Equação Clássica de Ondas', url: '#' },
            { title: '3. Equação de Schrödinger e Partícula em uma Caixa', url: '#' },
            { title: '4. Postulados e Princípios da Mecânica Quântica', url: '#' },
            { title: '5. Oscilador Harmônico e Espectroscopia Vibracional', url: '#' },
            { title: '6. Rotor Rígido e Espectroscopia Rotacional', url: '#' },
            { title: '7. Espécies Hidrogenoides', url: '#' },
            { title: '8. Métodos de Aproximação', url: '#' },
            { title: '9. Átomos Multieletrônicos', url: '#' },
            { title: '10. Ligação Química: Espécies Moleculares Mono e Dieletrônicas', url: '#' }
        ]
    },
    quimicaGeral: {
        title: 'Química Geral',
        description: 'Estudo dos princípios fundamentais da química, incluindo estrutura atômica, ligações químicas, termodinâmica, cinética e equilíbrio.',
        icon: '🧪',
        aulasExercicios: [
            { title: 'Aula de Exercícios 1', videoUrl: 'https://drive.google.com/file/d/1QQGifFpt9AMUw8Ywn_cMd2pzLKWkAGFO/view?usp=sharing' },
            { title: 'Aula de Exercícios 2', videoUrl: 'https://drive.google.com/file/d/1zB3lNp2JkqkjuJ6OPK5NU3w8RSeW6z1-/view?usp=sharing' },
            { title: 'Aula de Exercícios 3', videoUrl: 'https://www.youtube.com/watch?v=2xLvVgx2428'}
        ]
    }
  };

  return (
    <div className="bg-background">
      
      {/* ===== CABEÇALHO ===== */}
      <div className="relative h-96 flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          src={videoUrl}
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-10"></div>
        <div className="relative z-20 text-center text-white p-4">
          <div className="flex items-center justify-center mb-3">
            <Book className="w-10 h-10 text-blue-400 mr-4" />
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Ensino
            </h1>
          </div>
          <div className="w-24 h-1 bg-blue-400 mx-auto mb-4"></div>
          <p className="text-base md:text-lg max-w-2xl mx-auto text-gray-200">
            Recursos, materiais de aula e cronogramas das disciplinas.
          </p>
        </div>
      </div>
      
      {/* ===== CONTEÚDO PRINCIPAL ===== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Card de introdução melhorado */}
        <div className="bg-gradient-to-r from-blue-900/10 to-indigo-900/10 rounded-xl shadow-lg p-8 mb-12 border border-blue-800/20">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-900/20 rounded-full flex items-center justify-center">
                  <Book className="w-6 h-6 text-blue-400" />
                </div>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl text-foreground mb-4">Como Navegar pelos Conteúdos</h2>
                <div className="prose prose-lg text-muted-foreground space-y-3">
                    <p className="mb-4">Selecione uma disciplina nas abas abaixo para acessar todos os materiais organizados por tópicos:</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 not-prose">
                      <div className="flex items-center space-x-3 bg-card p-4 rounded-lg border border-border">
                        <FileText className="w-5 h-5 text-blue-400" />
                        <span className="text-sm font-medium text-foreground">Material Teórico</span>
                      </div>
                      <div className="flex items-center space-x-3 bg-card p-4 rounded-lg border border-border">
                        <ClipboardList className="w-5 h-5 text-teal-400" />
                        <span className="text-sm font-medium text-foreground">Listas de Exercícios</span>
                      </div>
                      <div className="flex items-center space-x-3 bg-card p-4 rounded-lg border border-border">
                        <Calendar className="w-5 h-5 text-green-400" />
                        <span className="text-sm font-medium text-foreground">Cronograma & Datas</span>
                      </div>
                    </div>
                </div>
              </div>
            </div>
        </div>

        {/* ===== ABAS DAS DISCIPLINAS MELHORADAS ===== */}
        <div className="bg-card rounded-xl shadow-lg overflow-hidden border border-border">
          <div className="border-b border-border bg-muted/50">
            <div className="p-4">
              <h3 className="text-lg font-semibold text-foreground mb-2">Selecione uma Disciplina</h3>
              <p className="text-sm text-muted-foreground">Clique em uma das opções abaixo para visualizar os materiais</p>
            </div>
            <nav className="grid grid-cols-2 lg:grid-cols-4 gap-2 p-4">
              {Object.entries(subjects).map(([key, subject]) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`relative p-4 rounded-lg transition-all duration-200 text-center group ${
                    activeTab === key
                      ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                      : 'bg-card text-foreground hover:bg-blue-900/10 hover:text-blue-400 hover:shadow-md border border-border'
                  }`}
                >
                  <div className="text-3xl mb-2">{subject.icon}</div>
                  <div className="text-sm font-medium leading-tight">{subject.title}</div>
                  {activeTab === key && (
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2">
                      <ChevronRight className="w-4 h-4 rotate-90" />
                    </div>
                  )}
                </button>
              ))}
            </nav>
          </div>

          <div className="p-8">
            {Object.entries(subjects).map(([key, subject]) => (
              <div
                key={key}
                className={`${activeTab === key ? 'block' : 'hidden'}`}
              >
                <div className="mb-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="text-4xl">{subject.icon}</div>
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900 mb-2">{subject.title}</h3>
                      <p className="text-gray-700 text-lg leading-relaxed">
                        {subject.description}
                      </p>
                    </div>
                  </div>
                </div>
                
                {key === 'quimicaGeral' ? (
                  // RENDERIZAÇÃO ESPECIAL PARA QUÍMICA GERAL
                  <div className="space-y-8">
                    {/* Botão único para lista de exercícios resolvida */}
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200">
                      <h4 className="text-xl text-gray-900 mb-4 flex items-center font-bold">
                        <FileText className="w-5 h-5 mr-2 text-blue-600" />
                        Lista de Exercícios Resolvida
                      </h4>
                      <p className="text-gray-600 mb-4">
                        No link abaixo todas as listas resolvidas.
                      </p>
                      <a
                        href="https://web.goodnotes.com/s/pmfmaWhAxXXt1AOOwA3iO4"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-md"
                      >
                        <FileText className="w-5 h-5 mr-2" />
                        Ver Lista Completa Resolvida
                      </a>
                    </div>

                    {/* Vídeos das aulas */}
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h4 className="text-xl text-gray-900 mb-2 font-bold flex items-center">
                        <Video className="w-5 h-5 mr-3 text-teal-600" />
                        Gravações das Aulas de Exercícios
                      </h4>
                      <p className="text-gray-600 mb-6">
                        Assista às gravações das aulas onde os exercícios são resolvidos passo a passo pelo professor.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {subject.aulasExercicios.map((aula, index) => (
                          <div key={index} className="bg-card p-6 rounded-lg border border-border shadow-sm hover:shadow-lg hover:border-teal-400 transition-all duration-300 flex flex-col justify-between">
                            <div>
                              <h5 className="text-lg font-bold text-foreground mb-3">{aula.title}</h5>
                              <p className="text-sm text-gray-600 mb-6">
                                {aula.description || 'Gravação da aula de resolução de exercícios.'}
                              </p>
                            </div>
                            <div>
                              <a
                                href={aula.videoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => aula.videoUrl === '#' && e.preventDefault()}
                                className={`flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm transition-colors w-full ${
                                  aula.videoUrl === '#' 
                                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                                  : 'text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500'
                                }`}
                              >
                                <Video className="w-4 h-4 mr-2" />
                                {aula.videoUrl === '#' ? 'Gravação Indisponível' : 'Assistir Gravação'}
                              </a>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Formulário incorporado do Notion */}
                    <div className="bg-gradient-to-r from-indigo-50 to-indigo-100 p-6 rounded-xl border border-indigo-200">
                      <h4 className="text-xl text-gray-900 mb-4 font-bold flex items-center">
                        <ClipboardList className="w-5 h-5 mr-2 text-indigo-600" />
                        Formulário de Acompanhamento
                      </h4>
                      <p className="text-sm text-gray-600 mb-4">
                        Utilize o formulário abaixo para acompanhamento da disciplina e comunicação com o professor.
                      </p>
                      <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                        <iframe 
                          src="https://lqtsm.notion.site/ebd/1a58e483182a8016a8a5e96304d7bd4b" 
                          width="100%" 
                          height="600" 
                          className="border-0"
                          title="Formulário de Acompanhamento - Química Geral"
                        />
                      </div>
                    </div>
                  </div>
                ) : (
                  // RENDERIZAÇÃO PADRÃO PARA AS OUTRAS DISCIPLINAS
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {subject.bibliografia && (
                        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200">
                            <h4 className="text-xl text-gray-900 mb-4 flex items-center font-bold">
                                <Book className="w-5 h-5 mr-2 text-blue-600" />
                                Bibliografia Recomendada
                            </h4>
                            <div className="space-y-3">
                                {subject.bibliografia.map((book, index) => (
                                <div key={index} className="p-4 bg-card rounded-lg shadow-sm border border-blue-800/20">
                                    <span className="text-foreground text-sm leading-relaxed">{book}</span>
                                </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {subject.datas && (
                        <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200">
                            <h4 className="text-xl text-gray-900 mb-4 font-bold flex items-center">
                                <Calendar className="w-5 h-5 mr-2 text-green-600" />
                                Cronograma de Avaliações
                            </h4>
                            <div className="space-y-3">
                                {Object.entries(subject.datas).map(([prova, data]) => (
                                <div key={prova} className="flex justify-between items-center p-3 bg-white rounded-lg shadow-sm border border-green-100">
                                    <span className="font-semibold text-gray-900">{prova}:</span>
                                    <span className="text-gray-600 font-medium">{data as string}</span>
                                </div>
                                ))}
                            </div>
                        </div>
                    )}
                    
                    {/* Formulário incorporado do Notion - apenas para Eletricidade */}
                    {key === 'eletricidade' && (
                        <div className="lg:col-span-2 bg-gradient-to-r from-indigo-50 to-indigo-100 p-6 rounded-xl border border-indigo-200 mb-8">
                            <h4 className="text-xl text-gray-900 mb-4 font-bold flex items-center">
                                <ClipboardList className="w-5 h-5 mr-2 text-indigo-600" />
                                Formulário de Acompanhamento
                            </h4>
                            <p className="text-sm text-gray-600 mb-4">
                                Utilize o formulário abaixo para acompanhamento da disciplina e comunicação com o professor.
                            </p>
                            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                                <iframe 
                                    src="https://lqtsm.notion.site/ebd/1a58e483182a8016a8a5e96304d7bd4b" 
                                    width="100%" 
                                    height="600" 
                                    className="border-0"
                                    title="Formulário de Acompanhamento - Eletricidade"
                                />
                            </div>
                        </div>
                    )}
                    
                    {/* Formulário incorporado do Notion - apenas para Termodinâmica */}
                    {key === 'termodinamica' && (
                        <div className="lg:col-span-2 bg-gradient-to-r from-indigo-50 to-indigo-100 p-6 rounded-xl border border-indigo-200 mb-8">
                            <h4 className="text-xl text-gray-900 mb-4 font-bold flex items-center">
                                <ClipboardList className="w-5 h-5 mr-2 text-indigo-600" />
                                Formulário de Acompanhamento
                            </h4>
                            <p className="text-sm text-gray-600 mb-4">
                                Utilize o formulário abaixo para acompanhamento da disciplina e comunicação com o professor.
                            </p>
                            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                                <iframe 
                                    src="https://lqtsm.notion.site/ebd/1a58e483182a8016a8a5e96304d7bd4b" 
                                    width="100%" 
                                    height="600" 
                                    className="border-0"
                                    title="Formulário de Acompanhamento - Termodinâmica"
                                />
                            </div>
                        </div>
                    )}
                    
                    <div className="lg:col-span-2 bg-gradient-to-r from-gray-50 to-slate-50 p-8 rounded-xl border border-gray-200">
                      <h4 className="text-2xl text-gray-900 mb-6 font-bold flex items-center">
                        <FileText className="w-6 h-6 mr-3 text-gray-700" />
                        Materiais de Estudo Organizados por Tópicos
                      </h4>
                      
                      {subject.goodnotesUrl && (
                        <div className={`p-6 bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl border border-purple-200 mb-8 ${subject.goodnotesUrl === '#' ? 'opacity-60' : 'hover:shadow-md transition-all duration-200'}`}>
                            <div className="flex items-start space-x-4">
                              <div className="flex-shrink-0">
                                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                                  <Book className="w-6 h-6 text-purple-600" />
                                </div>
                              </div>
                              <div className="flex-1">
                                <h5 className="font-bold text-gray-800 mb-2">📱 Caderno Digital Interativo</h5>
                                <p className="text-sm text-gray-600 mb-4">
                                Acesse o caderno completo com anotações de aula, demonstrações, resoluções detalhadas e conteúdos extras organizados por capítulos.
                                </p>
                                <a
                                href={subject.goodnotesUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`inline-flex items-center px-4 py-2 rounded-lg font-medium transition-all ${
                                    subject.goodnotesUrl === '#'
                                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                                    : 'bg-purple-600 text-white hover:bg-purple-700 shadow-md hover:shadow-lg'
                                }`}
                                onClick={(e) => subject.goodnotesUrl === '#' && e.preventDefault()}
                                >
                                {subject.goodnotesUrl === '#' ? 'Caderno será disponibilizado em breve' : 'Acessar Caderno Goodnotes'}
                                {subject.goodnotesUrl !== '#' && <ExternalLink className="w-4 h-4 ml-2" />}
                                </a>
                              </div>
                            </div>
                        </div>
                      )}

                      <div className="space-y-4">
                        {subject.materials?.map((material, index) => {
                          const exercicio = subject.exercicios[index];
                          const materialAvailable = material.url !== '#';
                          const exercicioAvailable = exercicio && exercicio.url !== '#';
                          
                          return (
                            <div key={index} className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all duration-200">
                                <div className="flex items-start justify-between mb-4">
                                  <h5 className="font-bold text-gray-800 text-lg">{material.title}</h5>
                                  <div className="flex space-x-2">
                                    {materialAvailable && (
                                      <div className="flex items-center text-green-600 text-xs">
                                        <CheckCircle className="w-3 h-3 mr-1" />
                                        Material
                                      </div>
                                    )}
                                    {exercicioAvailable && (
                                      <div className="flex items-center text-green-600 text-xs">
                                        <CheckCircle className="w-3 h-3 mr-1" />
                                        Exercícios
                                      </div>
                                    )}
                                    {!materialAvailable && !exercicioAvailable && (
                                      <div className="flex items-center text-amber-600 text-xs">
                                        <Clock className="w-3 h-3 mr-1" />
                                        Em breve
                                      </div>
                                    )}
                                  </div>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    <a
                                        href={material.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={(e) => material.url === '#' && e.preventDefault()}
                                        className={`group flex items-center justify-between p-4 rounded-lg transition-all duration-200 border-2 ${
                                            materialAvailable 
                                            ? 'border-blue-200 bg-blue-50 hover:bg-blue-100 hover:border-blue-300 cursor-pointer' 
                                            : 'border-gray-200 bg-gray-50 cursor-not-allowed opacity-60'
                                        }`}
                                    >
                                        <div className="flex items-center">
                                          <FileText className={`w-5 h-5 mr-3 ${materialAvailable ? 'text-blue-500' : 'text-gray-400'}`} />
                                          <div>
                                            <div className="text-sm font-medium">Material Teórico</div>
                                            <div className="text-xs text-gray-500">
                                              {materialAvailable ? 'Clique para acessar' : 'Será disponibilizado'}
                                            </div>
                                          </div>
                                        </div>
                                        {materialAvailable && <ExternalLink className="w-4 h-4 text-blue-400 group-hover:text-blue-600" />}
                                        {!materialAvailable && <AlertCircle className="w-4 h-4 text-gray-400" />}
                                    </a>
                                    
                                    {exercicio && (
                                    <a
                                        href={exercicio.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={(e) => exercicio.url === '#' && e.preventDefault()}
                                        className={`group flex items-center justify-between p-4 rounded-lg transition-all duration-200 border-2 ${
                                            exercicioAvailable
                                            ? 'border-teal-200 bg-teal-50 hover:bg-teal-100 hover:border-teal-300 cursor-pointer'
                                            : 'border-gray-200 bg-gray-50 cursor-not-allowed opacity-60'
                                        }`}
                                    >
                                        <div className="flex items-center">
                                          <ClipboardList className={`w-5 h-5 mr-3 ${exercicioAvailable ? 'text-teal-500' : 'text-gray-400'}`} />
                                          <div>
                                            <div className="text-sm font-medium">Lista de Exercícios</div>
                                            <div className="text-xs text-gray-500">
                                              {exercicioAvailable ? 'Clique para acessar' : 'Será disponibilizado'}
                                            </div>
                                          </div>
                                        </div>
                                        {exercicioAvailable && <ExternalLink className="w-4 h-4 text-teal-400 group-hover:text-teal-600" />}
                                        {!exercicioAvailable && <AlertCircle className="w-4 h-4 text-gray-400" />}
                                    </a>
                                    )}
                                </div>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                )}

                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mt-8">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-amber-600" />
                    <p className="text-sm text-amber-700 font-medium">
                      Os materiais são disponibilizados gradualmente conforme o progresso das aulas durante o semestre letivo.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}