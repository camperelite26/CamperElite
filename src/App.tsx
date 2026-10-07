/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { 
  Github, 
  ArrowRight, 
  Terminal, 
  Cloud, 
  CheckCircle2, 
  AlertCircle, 
  Copy, 
  ExternalLink,
  Code2,
  RefreshCw,
  FolderGit2
} from 'lucide-react';

export default function App() {
  const [repoUrl, setRepoUrl] = useState('');
  const [copied, setCopied] = useState(false);

  const samplePrompt = repoUrl.trim() 
    ? `Por favor clona e importa mi proyecto de GitHub desde: ${repoUrl.trim()} y configúralo para que se ejecute en esta plataforma.`
    : `Por favor clona e importa mi proyecto de GitHub desde: [TU_URL_DE_GITHUB] y configúralo para que se ejecute en esta plataforma.`;

  const copyPrompt = () => {
    navigator.clipboard.writeText(samplePrompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-indigo-500 selection:text-white">
      {/* Top Header */}
      <header className="border-b border-slate-800 bg-slate-900/60 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-indigo-500 to-sky-400 flex items-center justify-center text-white shadow-lg shadow-indigo-500/20">
              <FolderGit2 className="h-5 w-5" />
            </div>
            <div>
              <h1 className="font-semibold text-sm sm:text-base text-slate-100 leading-tight">
                Importación y Despliegue de GitHub
              </h1>
              <p className="text-xs text-slate-400">Google AI Studio Build</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              Servidor Activo (Puerto 3000)
            </span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-5xl mx-auto w-full px-4 sm:px-6 py-8 space-y-8">
        
        {/* Hero Section */}
        <div className="text-center space-y-3 max-w-2xl mx-auto pt-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-medium">
            <Github className="w-3.5 h-3.5" />
            Integración de Repositorios GitHub
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            ¿Cómo conectar tu repositorio de GitHub aquí?
          </h2>
          <p className="text-sm sm:text-base text-slate-400">
            Puedes importar cualquier repositorio directamente en este entorno para ejecutarlo, adaptarlo y previsualizarlo en la URL compartida de la nube.
          </p>
        </div>

        {/* Quick Action Box: Repositorio URL */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
          
          <h3 className="text-base font-semibold text-slate-200 mb-2 flex items-center gap-2">
            <Github className="w-5 h-5 text-indigo-400" />
            Paso Rápido: Proporciona la URL de tu repositorio
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mb-5">
            Ingresa la URL pública de tu repositorio de GitHub para generar el comando de importación directa:
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="https://github.com/tu-usuario/tu-proyecto"
                value={repoUrl}
                onChange={(e) => setRepoUrl(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-2.5 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-colors"
              />
            </div>
            <button
              onClick={copyPrompt}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm transition-all shadow-md shadow-indigo-600/25 active:scale-[0.98]"
            >
              {copied ? <CheckCircle2 className="w-4 h-4 text-emerald-300" /> : <Copy className="w-4 h-4" />}
              {copied ? '¡Copiado!' : 'Copiar Solicitud para el Chat'}
            </button>
          </div>

          <div className="mt-4 p-3.5 bg-slate-950/70 rounded-xl border border-slate-800 text-xs font-mono text-slate-300 flex items-center justify-between gap-3">
            <span className="truncate">{samplePrompt}</span>
            <span className="text-[10px] text-slate-400 whitespace-nowrap bg-slate-800 px-2 py-0.5 rounded">
              Pégalo en el chat 💬
            </span>
          </div>
        </div>

        {/* 3 Step Guide */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5 space-y-3">
            <div className="w-9 h-9 rounded-xl bg-sky-500/10 text-sky-400 flex items-center justify-center font-bold text-sm border border-sky-500/20">
              1
            </div>
            <h4 className="font-semibold text-sm text-slate-200">Comparte tu enlace o archivos</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Pega el enlace de GitHub (público) en este chat. El asistente descargará e integrará automáticamente el código en este workspace.
            </p>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5 space-y-3">
            <div className="w-9 h-9 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center font-bold text-sm border border-indigo-500/20">
              2
            </div>
            <h4 className="font-semibold text-sm text-slate-200">Adaptación automática</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              El entorno instalará las dependencias (npm), configurará el puerto 3000 de Vite/Express y adaptará cualquier variable de entorno requerida.
            </p>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5 space-y-3">
            <div className="w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold text-sm border border-emerald-500/20">
              3
            </div>
            <h4 className="font-semibold text-sm text-slate-200">Despliegue y URL en Vivo</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Tu aplicación quedará automáticamente visible tanto en la vista previa del editor como en la URL compartida de Cloud Run alojada por la plataforma.
            </p>
          </div>
        </div>

        {/* Technical Explanations (CI/CD vs AI Studio Workspace) */}
        <div className="border border-slate-800 bg-slate-900/40 rounded-2xl p-6 space-y-4">
          <h3 className="text-sm font-semibold text-slate-200 flex items-center gap-2">
            <Cloud className="w-4 h-4 text-sky-400" />
            ¿Cómo funciona el despliegue automático en Google AI Studio?
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-400 leading-relaxed">
            <div className="p-4 rounded-xl bg-slate-950/50 border border-slate-800/80 space-y-2">
              <div className="font-medium text-slate-200 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-indigo-400" />
                En este entorno de AI Studio
              </div>
              <p>
                Este espacio es un entorno de desarrollo en la nube (contenedor en Cloud Run). Cualquier cambio en el código se compila al instante y está disponible en tu enlace público compartido (Shared URL).
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950/50 border border-slate-800/80 space-y-2">
              <div className="font-medium text-slate-200 flex items-center gap-2">
                <RefreshCw className="w-4 h-4 text-sky-400" />
                Sincronización continua de Git (CI/CD)
              </div>
              <p>
                AI Studio no se enlaza mediante webhooks automáticos para auto-desplegar con cada <code className="text-indigo-300">git push</code> externo. Para actualizarlo, basta con pedir en el chat que sincronice o vuelva a descargar los cambios más recientes del repo.
              </p>
            </div>
          </div>
        </div>

        {/* Requirements info banner */}
        <div className="rounded-xl p-4 bg-amber-500/10 border border-amber-500/20 text-xs text-amber-200 flex items-start gap-3">
          <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <p className="font-semibold text-amber-300">Requisitos para proyectos importados:</p>
            <p className="text-amber-200/80">
              El entorno soporta aplicaciones Web (React, Vite, Next.js, Node.js/Express) que escuchen en el puerto 3000. Si tu repositorio contiene una app en otro framework o lenguaje, podemos adaptarla para que funcione aquí fluidamente.
            </p>
          </div>
        </div>

      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800/60 py-4 text-center text-xs text-slate-500">
        Google AI Studio Build &bull; Entorno preparado para importar y desplegar
      </footer>
    </div>
  );
}

