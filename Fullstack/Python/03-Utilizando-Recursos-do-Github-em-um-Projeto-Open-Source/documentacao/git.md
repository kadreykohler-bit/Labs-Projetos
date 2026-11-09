# Git — Sistema de Controle de Versão

## 1. O que é Git?

Git é um sistema de controle de versão distribuído utilizado para acompanhar alterações realizadas em arquivos de um projeto.

Ele permite registrar o histórico de modificações, recuperar versões anteriores e trabalhar em equipe no desenvolvimento de software.

## 2. Principais conceitos

- **Repositório:** local onde ficam armazenados os arquivos e o histórico do projeto.
- **Commit:** registro de um conjunto de alterações.
- **Branch:** ramificação que permite desenvolver funcionalidades separadamente.
- **Merge:** operação que combina alterações de diferentes branches.
- **Clone:** cópia de um repositório remoto para o computador.
- **Fork:** cópia de um repositório para outra conta no GitHub.
- **Push:** envio de commits para um repositório remoto.
- **Pull:** atualização do repositório local com alterações remotas.

## 3. Principais comandos Git

| Comando | Função |
|---|---|
| `git init` | Inicializa um repositório Git. |
| `git status` | Mostra o estado dos arquivos. |
| `git add .` | Adiciona as alterações à área de preparação. |
| `git commit -m "mensagem"` | Registra as alterações. |
| `git log` | Exibe o histórico de commits. |
| `git branch` | Lista as branches. |
| `git switch nome` | Troca de branch. |
| `git switch -c nome` | Cria e acessa uma nova branch. |
| `git merge nome` | Combina uma branch com a atual. |
| `git clone URL` | Clona um repositório. |
| `git pull` | Busca e integra atualizações remotas. |
| `git push` | Envia commits para o repositório remoto. |

## 4. Fluxo básico de trabalho

Um fluxo comum de utilização do Git é:

1. Criar ou modificar arquivos.
2. Verificar as alterações com `git status`.
3. Adicionar os arquivos com `git add`.
4. Criar um commit com `git commit`.
5. Enviar as alterações com `git push`, quando houver um repositório remoto configurado.

## 5. Importância do Git

O Git é importante porque permite:

- Controlar o histórico de alterações.
- Organizar o desenvolvimento de projetos.
- Trabalhar com diferentes versões do código.
- Colaborar com outros desenvolvedores.
- Recuperar versões anteriores.
- Facilitar a manutenção dos projetos.

## 6. Aplicação no projeto

Neste projeto prático da DIO, o Git será utilizado para compreender o controle de versão, organizar alterações e acompanhar o desenvolvimento de um projeto voltado à colaboração Open Source.