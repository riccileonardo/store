# Desafio Técnico — Página de Produto E-commerce

Este projeto foi desenvolvido como parte de um desafio técnico. O objetivo é construir uma página de produto utilizando **React** e **Tailwind CSS**, com foco em boas práticas de organização, experiência do usuário e flexibilidade para manutenção futura.

> **Deploy**: https://store-dun-two.vercel.app/ <br>
> **Repositório GitHub**: https://github.com/riccileonardo/store

---

## ✅ Funcionalidades implementadas

- 📸 **Galeria de Imagens**  
  Imagem principal + miniaturas interativas (troca a imagem ao clicar)

- 🏷️ **Título e Preço**  
  Exibição clara das informações principais do produto

- 🎨 **Seletores de Variante (Cor e Tamanho)**  
  Gerados **dinamicamente** a partir de um array de dados (sem hardcode)

- 🚚 **Consulta de CEP e Cálculo de Frete**  
  Integração com [ViaCEP](https://viacep.com.br) para buscar o endereço completo

- 💾 **Persistência de Estado**  
  Todas as ações do usuário (cor, tamanho e CEP) são **salvas por 15 minutos**, mesmo ao recarregar a página

- 📱 **Design Responsivo**  
  Mobile-first com TailwindCSS — testado em dispositivos móveis

---

#  Como rodar localmente

```bash
# 1. Clone o repositório
git clone https://github.com/riccileonardo/store
cd store

# 2. Instale as dependências
npm install

# 3. Rode o servidor de desenvolvimento
npm run dev

