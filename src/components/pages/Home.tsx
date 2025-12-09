import React from 'react';
import { Link } from 'react-router-dom';
import { Book, Microscope, Users, ExternalLink, ChevronRight, Globe, BookOpen } from 'lucide-react';

// Componente de Card reutilizável melhorado
const AreaCard = ({ href, icon, title, description, isExternal = false, badge }) => {
  const cardContent = (
    <div className={`group bg-card rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full border-2 border-border hover:border-blue-400/50 ${isExternal ? 'border-l-4 border-l-teal-400' : 'border-l-4 border-l-blue-400'}`}>
      <div className="p-8 text-center flex flex-col h-full">
        {badge && (
          <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium mb-4 self-start ${isExternal ? 'bg-teal-900/20 text-teal-400' : 'bg-blue-900/20 text-blue-400'}`}>
            {isExternal ? <Globe className="w-3 h-3 mr-1" /> : <BookOpen className="w-3 h-3 mr-1" />}
            {badge}
          </div>
        )}
        <div className={`w-16 h-16 ${isExternal ? 'bg-teal-900/20' : 'bg-blue-900/20'} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:${isExternal ? 'bg-teal-900/30' : 'bg-blue-900/30'} transition-colors`}>
          {icon}
        </div>
        <h3 className="text-xl font-bold text-foreground mb-3">{title}</h3>
        <p className="text-muted-foreground mb-6 text-left flex-grow leading-relaxed">{description}</p>
        <div className={`flex items-center justify-center ${isExternal ? 'text-teal-400 group-hover:text-teal-300' : 'text-blue-400 group-hover:text-blue-300'} transition-colors mt-auto font-medium`}>
          <span>{isExternal ? 'Acessar site externo' : 'Explorar conteúdo'}</span>
          {isExternal ? <ExternalLink className="w-4 h-4 ml-2" /> : <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />}
        </div>
      </div>
    </div>
  );

  if (isExternal) {
    return <a href={href} target="_blank" rel="noopener noreferrer">{cardContent}</a>;
  }

  return <Link to={href}>{cardContent}</Link>;
};


export function Home() {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative pt-28 pb-16 overflow-hidden">
        <video
          src="https://i.imgur.com/nLt7pgr.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20">
          <div className="text-center">
            <div className="mb-6">
              <h1 className="text-4xl lg:text-5xl text-white mb-4 font-bold">
                Prof. Haroldo Candal
              </h1>
              <p className="text-lg text-teal-200 mb-2">
                <a href="https://www.uerj.br/" target="_blank" rel="noopener noreferrer" className="hover:underline transition-colors">
                  Universidade do Estado do Rio de Janeiro (UERJ)
                </a>
              </p>
              <p className="text-lg text-gray-200">
                Departamento de Físico-Química
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Apresentação e Perfil Acadêmico</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          </div>
          <div className="prose prose-lg mx-auto text-gray-700">
            <p>
              Natural do Rio de Janeiro, concluiu a Licenciatura em Química pela Universidade do Estado do Rio de Janeiro (UERJ) em 2015. Em seguida, obteve o Mestrado em Química na Universidade Federal Fluminense (UFF) em 2019 e finalizou o Doutorado em Química na mesma instituição em 2023.
            </p>
            <p>
              Atualmente professor adjunto no Departamento de Físico-Química da UERJ, dedica-se ao desenvolvimento de tecnologias inovadoras aplicadas ao ensino de Físico-Química, buscando estratégias metodológicas que facilitem a compreensão de conceitos complexos pelos estudantes.
            </p>
            <p>
              Na área de pesquisa, concentra esforços em estudos de Modelagem Molecular aplicada a sistemas de interesse científico e tecnológico. Paralelamente, coordena projetos de extensão universitária que promovem a democratização do conhecimento científico.
            </p>
          </div>
          <div className="text-center mt-12">
            <a href="http://lattes.cnpq.br/0841126231630553" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-md">
              Currículo Lattes
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Explore as Áreas de Atuação</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Navegue pelos diferentes pilares do trabalho acadêmico: ensino inovador, pesquisa científica e extensão universitária.
            </p>
          </div>
          
          {/* Seção de Navegação Interna */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
              <BookOpen className="w-5 h-5 mr-2 text-blue-600" />
              Conteúdo do Site
            </h3>
            <div className="grid grid-cols-1 gap-8">
              <AreaCard
                href="/ensino"
                icon={<Book className="w-8 h-8 text-blue-600" />}
                title="Ensino"
                description="Acesse materiais didáticos, cronogramas, listas de exercícios e recursos complementares das disciplinas ministradas. Inclui Termodinâmica, Eletricidade, Química Quântica e Química Geral."
                badge="Neste site"
              />
            </div>
          </div>

          {/* Seção de Sites Externos */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
              <Globe className="w-5 h-5 mr-2 text-teal-600" />
              Sites Especializados
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <AreaCard
                href="https://lqtsm.figma.site"
                isExternal={true}
                icon={<Microscope className="w-8 h-8 text-teal-600" />}
                title="Pesquisa - LQTSM"
                description="Laboratório de Química Teórica e Simulação Molecular. Publicações científicas, projetos de pesquisa e estudos em modelagem molecular."
                badge="Site externo"
              />
              <AreaCard
                href="https://conexaouerj.figma.site"
                isExternal={true}
                icon={<Users className="w-8 h-8 text-teal-600" />}
                title="Extensão - Projeto Conexão"
                description="Iniciativa de democratização do acesso ao ensino de Química de qualidade, conectando a universidade com a comunidade externa."
                badge="Site externo"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}