# API de Transacoes Bancarias

API de controle financeiro construida com FastAPI. A aplicacao permite cadastrar usuarios, autenticar com tokens JWT e registrar receitas e despesas em um banco SQLite. Tambem inclui uma pagina web para consultar o saldo e as transacoes.

## Funcionalidades

- Cadastro de usuario e autenticacao por token.
- Criacao de receitas e despesas em rotas protegidas.
- Consulta do extrato com autenticacao.
- Validacao para impedir uma despesa maior que o saldo calculado.
- Pagina de resumo financeiro em `/financeiro`.

## Tecnologias

- Python e FastAPI
- SQLAlchemy e SQLite
- Pydantic e Jinja2
- JWT e Passlib
- Docker

## Executar localmente

Com Python instalado, crie e ative um ambiente virtual no PowerShell e instale as dependencias:

```powershell
python -m venv .venv
.\.venv\Scripts\Activate.ps1
python -m pip install -r requirements.txt
python -m uvicorn app.main:app --reload
```

A aplicacao estara disponivel em `http://127.0.0.1:8000`. A documentacao interativa da API fica em `http://127.0.0.1:8000/docs`.

## Executar com Docker

Na pasta do projeto, construa a imagem e inicie o conteiner:

```bash
docker build -t api-transacoes-bancarias .
docker run --rm -p 8080:8080 api-transacoes-bancarias
```

Com Docker, acesse `http://localhost:8080`; a documentacao fica em `http://localhost:8080/docs`.

## Rotas principais

| Metodo | Rota | Uso |
|---|---|---|
| `POST` | `/usuarios/` | Cadastrar usuario |
| `POST` | `/token` | Autenticar e obter token |
| `POST` | `/transacoes/` | Registrar receita ou despesa (requer autenticacao) |
| `GET` | `/extrato/` | Consultar transacoes (requer autenticacao) |
| `GET` | `/financeiro` | Abrir a pagina de resumo financeiro |

Para registrar uma transacao, envie `valor`, `descricao` e `tipo` (`receita` ou `despesa`) no corpo JSON. As rotas protegidas devem receber o token JWT obtido no login no cabecalho de autorizacao.

## Testes

Execute os testes automatizados com:

```bash
pytest
```

## Estrutura

- `app/`: aplicacao, modelos, esquemas e conexao com o banco.
- `templates/`: pagina HTML do resumo financeiro.
- `testes/`: testes da API e da pagina.
- `Dockerfile`: configuracao para execucao em conteiner.
