import React, { useState } from 'react';
import { Users, ChevronDown, Youtube, FileText, X, BookOpen } from 'lucide-react';
import YouTube from 'react-youtube';

// --- Componentes Auxiliares ---

// MODAL PARA EXIBIR O VÍDEO DO YOUTUBE
function VideoModal({ videoId, onClose }) {
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 transition-opacity duration-300"
      onClick={onClose}
    >
      <div 
        className="bg-white p-4 rounded-lg shadow-2xl relative max-w-3xl w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute -top-4 -right-4 bg-white rounded-full p-2 text-gray-700 hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
          <X size={24} />
        </button>
        <div className="aspect-w-16 aspect-h-9">
          <YouTube videoId={videoId} opts={opts} className="w-full h-full" />
        </div>
      </div>
    </div>
  );
}


// ABAS DE CONTEÚDO PARA VÍDEOS E ARTIGOS
function ContentTabs({ content, onPlayVideo }) {
  const [activeTab, setActiveTab] = useState('teoria');
  const tabs = [
    { id: 'teoria', label: 'Teoria', data: content.teoria },
    { id: 'experimentos', label: 'Experimentos', data: content.experimentos },
    { id: 'exercicios', label: 'Exercícios', data: content.exercicios },
  ];

  const renderContentItem = (item, index) => {
    if (item.type === 'youtube') {
      return (
        <button key={index} onClick={() => onPlayVideo(item.videoId)} className="w-full flex items-center p-3 bg-white rounded-md shadow-sm hover:bg-blue-50 transition-colors border border-gray-200 text-left">
          <Youtube className="w-5 h-5 mr-3 text-red-600 flex-shrink-0" />
          <span className="text-gray-800">{item.title}</span>
        </button>
      );
    }
    if (item.type === 'artigo') {
       return (
        <a key={index} href={item.url} target="_blank" rel="noopener noreferrer" className="flex items-center p-3 bg-white rounded-md shadow-sm hover:bg-blue-50 transition-colors border border-gray-200">
          <FileText className="w-5 h-5 mr-3 text-blue-600 flex-shrink-0" />
          <span className="text-gray-800">{item.title}</span>
        </a>
      );
    }
    return null;
  };

  return (
    <div className="mt-4">
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-6" aria-label="Tabs">
          {tabs.map(tab => (
            <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`${activeTab === tab.id ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} whitespace-nowrap py-3 px-1 border-b-2 font-medium text-sm`}>
              {tab.label}
            </button>
          ))}
        </nav>
      </div>
      <div className="py-5">
        <div className="space-y-3">
          {tabs.find(tab => tab.id === activeTab)?.data.length > 0 ? (
             tabs.find(tab => tab.id === activeTab)?.data.map(renderContentItem)
          ) : (
            <p className="text-gray-500">Nenhum conteúdo disponível nesta seção ainda.</p>
          )}
        </div>
      </div>
    </div>
  );
}

// COMPONENTE RECURSIVO COM LÓGICA DE DESTAQUE ATIVO
function RecursiveAccordionNode({ node, level = 0, onPlayVideo, path, activeNodePath, onNodeClick }) {
  const [isOpen, setIsOpen] = useState(false);
  const isLeafNode = !!node.content;
  
  const isActive = isLeafNode && path === activeNodePath;

  const basePaddingRem = 1;
  const indentationRem = level * 1.5;
  const totalPaddingLeftRem = basePaddingRem + indentationRem;

  const handleClick = () => {
    setIsOpen(!isOpen);
    if (isLeafNode) {
      onNodeClick(path);
    }
  };

  return (
    <div className="border-b border-gray-200 last:border-b-0 bg-white">
      <button
        onClick={handleClick}
        className={`w-full flex items-center py-4 pr-4 text-left transition-colors focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-300
                    ${isActive ? 'bg-teal-100 hover:bg-teal-200' : 'hover:bg-blue-50 focus:bg-blue-50'}`}
        style={{ paddingLeft: `${totalPaddingLeftRem}rem` }}
      >
        <BookOpen className={`w-5 h-5 mr-3 flex-shrink-0 ${isActive ? 'text-teal-700' : 'text-blue-500'}`} />
        <span className={`flex-grow text-md font-medium ${isActive ? 'text-teal-900' : 'text-gray-800'}`}>{node.title}</span>
        <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      <div className={`overflow-hidden transition-[max-height] duration-700 ease-in-out ${isOpen ? 'max-h-[2000px]' : 'max-h-0'}`}>
        <div className={`bg-gray-50/70 border-t border-gray-200`}>
          {isLeafNode ? (
            <div className="p-4"><ContentTabs content={node.content} onPlayVideo={onPlayVideo} /></div>
          ) : (
            <div>
              {node.children.map((childNode, index) => (
                <RecursiveAccordionNode 
                  key={index} 
                  node={childNode} 
                  level={level + 1}
                  path={`${path}-${index}`}
                  activeNodePath={activeNodePath}
                  onNodeClick={onNodeClick}
                  onPlayVideo={onPlayVideo} 
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}


// --- Componente Principal ---

export function Extension() {
  const [openChapters, setOpenChapters] = useState({});
  const [playingVideoId, setPlayingVideoId] = useState(null);
  const [activeNodePath, setActiveNodePath] = useState(null);

  const handleToggleChapter = (id) => {
    setOpenChapters(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleNodeClick = (path) => {
    setActiveNodePath(prevPath => (prevPath === path ? null : path));
  };
  
  const projectActivities = [
    { title: "Conteúdo Teórico", description: "Democratizar o acesso ao conteúdo teórico de Química.", icon: "📚" },
    { title: "Experimentos", description: "Visitações em escolas para a realização de experimentos.", icon: "🧪" },
    { title: "Materiais Didáticos", description: "Desenvolvimento de materiais didáticos gratuitos.", icon: "💻" }
  ];

  const createContent = () => ({ teoria: [], experimentos: [], exercicios: [] });

  const theoreticalContent = [
    {
      sectionTitle: "QUÍMICA GERAL E INORGÂNICA",
      chapters: [
        {
          title: "Aspectos Macroscópicos da Matéria",
          children: [
            { title: "Matéria e Energia", content: { teoria: [ { title: "Vídeo Introdutório sobre Matéria", type: 'youtube', videoId: 'gomeTeiWJtI' }, { title: "Artigo: Estados da Matéria", type: 'artigo', url: '#' } ], experimentos: [], exercicios: [] } },
            { title: "Grandezas: Massa, Volume e Densidade", content: createContent() },
            { title: "Estados de Agregação e Mudanças de Estado de Agregação", content: createContent() },
            { title: "Propriedades da Matéria", content: createContent() },
            { title: "Substâncias e Misturas: Fases, Componentes e Classificação", content: createContent() },
            { title: "Aquecimento e resfriamento de substâncias", content: createContent() },
            { title: "Aquecimento e resfriamento de misturas", content: createContent() },
            { title: "Métodos de separação de sistemas homogêneos", content: createContent() },
            { title: "Métodos de separação de sistemas heterogêneos", content: createContent() },
          ],
        },
        {
          title: "Atomística",
          children: [
            { title: "A hipótese atômica e o modelo de Dalton", content: createContent() },
            { title: "O modelo de Thomson e a descoberta do elétron", content: createContent() },
            { title: "O modelo de Rutherford", content: createContent() },
            { title: "O modelo de Bohr", content: createContent() },
            { title: "O modelo de Sommerfeld", content: createContent() },
            { title: "Constituição dos átomos e íons", content: createContent() },
            { title: "Semelhanças atômicas", content: createContent() },
            { title: "Configuração eletrônica em níveis e subníveis", content: createContent() },
            { title: "Configurações eletrônicas especiais", content: createContent() },
          ],
        },
        {
          title: "Os elementos químicos",
          children: [
            { title: "A evolução das classificações periódicas", content: createContent() },
            { title: "Períodos e grupos", content: createContent() },
            { title: "Blocos da tabela periódica", content: createContent() },
            { title: "Classificação quanto à condutividade elétrica", content: createContent() },
            { title: "Propriedades periódicas: raio atômico", content: createContent() },
            { title: "Propriedades periódicas: energia de ionização", content: createContent() },
            { title: "Propriedades periódicas: afinidade eletrônica", content: createContent() },
            { title: "Propriedades periódicas: eletronegatividade", content: createContent() },
            { title: "Propriedades periódicas: eletropositividade", content: createContent() },
            { title: "Propriedades periódicas: outras", content: createContent() },
          ],
        },
        {
          title: "Ligação química",
          children: [
            { title: "A regra do octeto", content: createContent() },
            { title: "Ligação iônica", content: createContent() },
            { title: "Ligação covalente", content: createContent() },
            { title: "Montagem de fórmulas estruturais simples", content: createContent() },
            { title: "Ligação metálica", content: createContent() },
            { title: "Condutividade elétrica de diferentes sistemas", content: createContent() },
            { title: "Ligação Covalente Coordenada x Expansão do Octeto", content: createContent() },
          ]
        },
        {
          title: "Geometria, polaridade e interações",
          children: [
            { title: "Teoria da Repulsão dos Pares Eletrônicos da Camada de Valência", content: createContent() },
            { title: "Geometrias possíveis para os pares eletrônicos", content: createContent() },
            { title: "Geometrias de moléculas", content: createContent() },
            { title: "Polaridade de ligações químicas", content: createContent() },
            { title: "Polaridade de moléculas", content: createContent() },
            { title: "Forças intermoleculares", content: createContent() },
            { title: "Conexão com as mudanças de estado de agregação", content: createContent() },
            { title: "Conexão com a solubilidade", content: createContent() },
          ]
        },
        {
          title: "Oxirredução",
          children: [
            { title: "Número de oxidação", content: createContent() },
            { title: "Elementos com Nox fixo", content: createContent() },
            { title: "Determinação de Nox", content: createContent() },
            { title: "Oxidação e redução", content: createContent() },
            { title: "Agentes oxidantes e redutores", content: createContent() },
          ],
        },
        {
          title: "Funções Inorgânicas",
          children: [
            { 
              title: "Ácidos",
              children: [
                { title: "Condutividade de compostos iônicos (dissociação)", content: createContent() },
                { title: "Ácidos de Arrhenius e equações de ionização", content: createContent() },
                { title: "Classificação de ácidos", content: createContent() },
                { title: "Nomenclatura de ácidos", content: createContent() },
                { title: "Formulação de ácidos", content: createContent() },
                { title: "Força x poder de corrosão", content: createContent() },
                { title: "Propriedades e aplicações", content: createContent() },
              ]
            },
            {
              title: "Bases",
              children: [
                { title: "Bases de Arrhenius e equações de dissociação", content: createContent() },
                { title: "Classificação das bases", content: createContent() },
                { title: "O hidróxido de amônio", content: createContent() },
                { title: "Nomenclatura de bases", content: createContent() },
                { title: "Propriedades e aplicações", content: createContent() },
              ]
            },
            {
              title: "Indicadores ácido-base e pH",
              children: [
                { title: "Escala de pH e ação de indicadores", content: createContent() },
                { title: "Indicadores comerciais", content: createContent() },
                { title: "Indicadores naturais", content: createContent() },
                { title: "Reações de neutralização total e parcial", content: createContent() },
              ]
            },
            { 
              title: "Sais", 
              children: [
                { title: "Conceito de sal", content: createContent() },
                { title: "Classificação de sais", content: createContent() },
                { title: "Nomenclatura de sais", content: createContent() },
                { title: "Formulação de sais", content: createContent() },
                { title: "Propriedades e aplicações", content: createContent() },
              ]
            },
            {
              title: "Óxidos",
              children: [
                { title: "Conceito de óxido", content: createContent() },
                { title: "Classificação de óxidos", content: createContent() },
                { title: "Nomenclatura de óxidos", content: createContent() },
                { title: "Formulação de óxidos", content: createContent() },
                { title: "Propriedades e aplicações", content: createContent() },
              ]
            },
            {
              title: "Peróxidos e superóxidos",
              children: [
                { title: "Conceitos de peróxidos e superóxidos", content: createContent() },
                { title: "Nomenclatura de peróxidos e superóxidos", content: createContent() },
                { title: "Formulação de peróxidos e superóxidos", content: createContent() },
                { title: "Propriedades e aplicações", content: createContent() },
              ]
            },
            {
              title: "Hidretos",
              children: [
                { title: "Conceito de hidreto", content: createContent() },
                { title: "Classificação de hidretos", content: createContent() },
                { title: "Nomenclatura de hidretos", content: createContent() },
                { title: "Formulação de hidretos", content: createContent() },
              ]
            },
          ],
        },
        {
          title: "Reações Inorgânicas",
          children: [
            { title: "Representação de uma reação", content: createContent() },
            { title: "Reações de adição ou síntese", content: createContent() },
            { title: "Reações de decomposição ou análise", content: createContent() },
            { title: "Reações de simples troca, deslocamento ou substituição", content: createContent() },
            { title: "Reações de dupla troca ou permutação", content: createContent() },
          ]
        },
      ],
    },
    { 
      sectionTitle: "FÍSICO-QUÍMICA", 
      chapters: [
          { title: "Soluções", children: [{ title: "Tópico de Exemplo", content: createContent() }] },
          { title: "Termoquímica", children: [{ title: "Tópico de Exemplo", content: createContent() }] },
      ] 
    },
    { 
      sectionTitle: "QUÍMICA ORGÂNICA", 
      chapters: [
          { title: "Introdução à Química Orgânica", children: [{ title: "Tópico de Exemplo", content: createContent() }] },
          { title: "Funções Orgânicas", children: [{ title: "Tópico de Exemplo", content: createContent() }] },
      ] 
    },
  ];

  return (
    <>
      {playingVideoId && <VideoModal videoId={playingVideoId} onClose={() => setPlayingVideoId(null)} />}

      <div className="min-h-screen bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4"><Users className="w-10 h-10 text-blue-600 mr-3" /><h1 className="text-4xl text-gray-900">Extensão</h1></div>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl text-white p-8 mb-12 text-center">
            <h2 className="text-4xl mb-4">Projeto Conexão</h2><p className="text-xl text-orange-100">Democratizando o acesso ao ensino de Química de qualidade</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl text-gray-900 mb-6">Sobre o Projeto</h3>
                <div className="prose prose-lg text-gray-700"><p>O Projeto Conexão nasceu da necessidade de levar o conhecimento científico para além dos muros da universidade, estabelecendo uma ponte entre a academia e a comunidade. Nossa missão é democratizar o acesso ao ensino de Química de qualidade, especialmente para estudantes de escolas públicas e comunidades em situação de vulnerabilidade social.</p></div>
              </div>
              <div className="flex justify-center">
                <div className="w-full max-w-md rounded-xl overflow-hidden shadow-lg">
                  <img src="https://images.unsplash.com/photo-1653241419345-3da52907f135" alt="Projeto Conexão em ação" className="w-full h-64 object-cover" />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h3 className="text-2xl text-gray-900 mb-6 text-center">Objetivos do Projeto</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {projectActivities.map((activity, index) => (
                <div key={index} className="text-center p-6 bg-gray-50 rounded-lg">
                  <div className="text-4xl mb-4">{activity.icon}</div>
                  <h4 className="text-lg text-gray-900 mb-3">{activity.title}</h4>
                  <p className="text-gray-600 text-sm">{activity.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Conteúdo Teórico</h3>
            <div className="space-y-12">
              {theoreticalContent.map((section, sectionIndex) => (
                <div key={sectionIndex}>
                  <h4 className="text-2xl font-semibold text-blue-600 mb-4 pb-2 border-b-2 border-blue-200">
                    {section.sectionTitle}
                  </h4>
                  <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                    {section.chapters.map((chapter, chapterIndex) => {
                      const id = `${sectionIndex}-${chapterIndex}`;
                      const isOpen = openChapters[id];
                      return (
                        <div key={id} className="border-b border-gray-200 last:border-b-0">
                          <button onClick={() => handleToggleChapter(id)} className="w-full flex justify-between items-center p-5 text-left bg-gray-100 hover:bg-gray-200/70 transition-colors focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-300">
                            <h5 className="text-xl text-gray-800 font-semibold">{chapter.title}</h5>
                            <ChevronDown className={`w-6 h-6 text-gray-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                          </button>
                          
                          <div className={`bg-white overflow-hidden transition-[max-height] duration-700 ease-in-out ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
                            {chapter.children.map((node, nodeIndex) => (
                              <RecursiveAccordionNode 
                                key={nodeIndex} 
                                node={node}
                                path={`${id}-${nodeIndex}`}
                                activeNodePath={activeNodePath}
                                onNodeClick={handleNodeClick}
                                onPlayVideo={setPlayingVideoId}
                              />
                            ))}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}