import React from 'react';
import { Microscope, ExternalLink, Beaker, Atom } from 'lucide-react';

export function Research() {
  // --- LISTA DE ARTIGOS ATUALIZADA ---
  const publications = [
    {
      title: "Theoretical calculations of 1H NMR chemical shifts for nitrogenated compounds in chloroform solution",
      doi: "https://doi.org/10.1016/j.chemphys.2019.110479"
    },
    {
      title: "Structural Determination of Antioxidant and Anticancer Flavonoid Rutin in Solution through DFT Calculations of 1H NMR Chemical Shifts",
      doi: "https://doi.org/10.1002/open.201800209"
    },
    {
      title: "Determination of Anticancer Zn(II)–Rutin Complex Structures in Solution through Density Functional Theory Calculations of 1H NMR and UV–VIS Spectra",
      doi: "https://doi.org/10.1021/acsomega.9b04174"
    },
    {
      title: "A theoretical investigation on the encapsulation process of mepivacaine into β-cyclodextrin",
      doi: "https://doi.org/10.1016/j.cplett.2019.137060"
    },
    {
      title: "Thermodynamic and structural description of relative solubility of the flavonoid rutin by DFT calculations and molecular dynamics simulations",
      doi: "https://doi.org/10.1016/j.molliq.2021.117214"
    },
    {
      title: "Conformational Analysis of 5,4′-Dihydroxy-7,5′,3′-trimethoxyisoflavone in Solution Using 1H NMR: A Density Functional Theory Approach",
      doi: "https://doi.org/10.1021/acs.jpca.0c02996"
    },
    {
      title: "An investigation of the predominant structure of antibiotic azithromycin in chloroform solution through NMR and thermodynamic analysis",
      doi: "https://doi.org/10.1039/D2CP02843C"
    },
    {
      title: "Unveiling the Molecular Structure of Antimalarial Drugs Chloroquine and Hydroxychloroquine in Solution through Analysis of 1H NMR Chemical Shifts",
      doi: "https://doi.org/10.1021/acs.jpcb.1c00609"
    },
    {
      title: "Structure of the flavonoid catechin in solution: NMR and quantum chemical investigations",
      doi: "https://doi.org/10.1039/D0NJ03251D"
    },
    {
      title: "Crystal Structure and 1H NMR Experimental and Theoretical Study of Conformers of5-Methyl-1-(4’-methylphenylsulfonylamino)-1H-[1,2,3]-triazole-4-carboxylic Acid Ethyl Esterand 5-Methyl-1-(phenylsulfonylamino)-1H-[1,2,3]-triazole-4-carboxylic Acid Ethyl Ester",
      doi: "http://dx.doi.org/10.21577/0103-5053.20190249"
    },
    {
      title: "Quantum chemical investigation of beta-CD–catechin flavonoid encapsulation in solution through NMR analysis: an adequate controlled drug-delivery system",
      doi: "https://doi.org/10.1039/D1NJ02756E"
    },
    {
      title: "Modeling Solvent Effects in Quantum Chemical Calculation of Relative Energies and NMR Chemical Shifts for Azithromycin",
      doi: "https://doi.org/10.1021/acs.jpca.4c08015"
    },
    {
      title: "Quantum chemical investigation of predominant conformation of the antibiotic azithromycin in water and DMSO solutions: thermodynamic and NMR analysis",
      doi: "https://doi.org/10.1098/rsos.230409"
    },
    {
      title: "Quantum Chemical Investigation of the Interaction of Thalidomide Monomeric, Dimeric, Trimeric, and Tetrameric Forms with Guanine DNA Nucleotide Basis in DMSO and Water Solution: A Thermodynamic and NMR Spectroscopy Analysis",
      doi: "https://doi.org/10.1021/acsomega.3c05922"
    },
    {
      title: "Theoretical Investigation of Regiodivergent Addition of Anilines and Phenolates to p-Benzoquinone Ring",
      doi: "https://doi.org/10.1021/acsomega.2c04607"
    },
    {
      title: "Quantum Chemical NMR Spectroscopic Structural Analysis in Solution: The Investigation of 3-Indoleacetic Acid Dimer Formation in Chloroform and DMSO Solution",
      doi: "https://doi.org/10.1002/mrc.5511"
    },
    {
      title: "On the use OF 1H-NMR chemical shifts and thermodynamic data for the prediction of the predominant conformation of organic molecules in solution: the example of the flavonoid rutin",
      doi: "https://doi.org/10.1039/D4RA03430A"
    }
  ];

  const researchLines = [
    {
      title: "Análises Conformacionais de Compostos Orgânicos em Solução",
      description: "Cálculo de propriedades termodinâmicas e espectroscópicas das possíveis conformações adotadas por compostos orgânicos visando determinar a(s) geometria(s) predominantes em solução.",
      icon: <Atom className="w-8 h-8 text-blue-600" />
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm-px-6 lg-px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Microscope className="w-10 h-10 text-blue-600 mr-3" />
            <h1 className="text-4xl text-gray-900">Pesquisa</h1>
          </div>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        {/* Laboratory Name */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl text-white p-8 mb-12 text-center">
          <h2 className="text-3xl mb-4">Laboratório de Química Teórica e Simulação Molecular (LQTSM)</h2>
        </div>

        {/* Laboratory Description */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h3 className="text-2xl text-gray-900 mb-6">Sobre o Laboratório</h3>
          <div className="prose prose-lg text-gray-700">
            <p>
              O Laboratório de Química Teórica e Simulação Molecular funciona na sala 401
              do Pavilhão Haroldo Lisboa da Cunha, da UERJ. Nossa equipe é constituída de
              quatro docentes, dois alunos de mestrado e dois alunos de iniciação científica,
              dedicando-se ao desenvolvimento e aplicação de métodos computacionais avançados
              para o estudo de sistemas químicos complexos. Utilizamos ferramentas da química
              quântica, mecânica estatística e dinâmica molecular para investigar propriedades
              estruturais, termodinâmicas e cinéticas de moléculas e materiais.
            </p>
            <p>
              Nossas principais linhas de pesquisa incluem análises conformacionais
              combinando dados termodinâmicos e espectroscópicos, através do desenvolvimento
              de software em Python para determinar a geometria mais provável de moléculas
              em solução. Também desenvolvemos colaborações em sequestro de poluentes,
              realizando trabalhos teóricos e experimentais sobre a interação entre
              moléculas de corantes têxteis poluentes e quitosana, na avaliação do
              potencial sequestrante de substâncias tóxicas de águas naturais.
            </p>
          </div>

          {/* Research Lines */}
          <div className="mt-8">
            <h4 className="text-xl text-gray-900 mb-6">Linhas de Pesquisa</h4>
            <div className="grid grid-cols-1 md-grid-cols-3 gap-6">
              {researchLines.map((line, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    {line.icon}
                    <h5 className="text-lg text-gray-900 ml-3">{line.title}</h5>
                  </div>
                  <p className="text-gray-600">{line.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Publications Section */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl text-gray-900 mb-6 flex items-center">
            <ExternalLink className="w-6 h-6 mr-3" />
            Publicações
          </h3>
          
          <div className="space-y-4">
            {publications.map((pub, index) => (
              <div key={index} className="border-l-4 border-blue-600 pl-6 py-4 bg-gray-50 rounded-r-lg">
                <h4 className="text-lg text-gray-900 mb-2">{pub.title}</h4>
                <div className="flex">
                  <a
                    href={pub.doi}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    <span className="mr-2 break-all">{pub.doi}</span>
                    <ExternalLink className="w-4 h-4 flex-shrink-0" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}