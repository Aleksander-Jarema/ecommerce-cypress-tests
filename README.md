# 🛒 ecommerce-cypress-tests

Automatyczny test end-to-end (E2E) stworzony w **Cypress** w języku **JavaScript**, który sprawdza, czy użytkownik może dodać produkt do koszyka na stronie [https://automationexercise.com](https://automationexercise.com).

## 📌 Cel projektu

Test ma za zadanie:
- Wejść na stronę sklepu
- Przejść do sekcji „Products”
- Dodać pierwszy produkt do koszyka
- Przejść do koszyka
- Zweryfikować, że produkt znajduje się w koszyku

## 🧰 Technologie

- [Cypress](https://www.cypress.io/) v12+
- Node.js v18+ 
- JavaScript

---

## ▶️ Jak uruchomić test

### 1. Zainstaluj Node.js

Pobierz z [nodejs.org](https://nodejs.org)

### 2. Zainstaluj zależności i uruchomienie

W terminalu, w katalogu projektu:
```bash
npm install
npx cypress open
