# 📊 Cálculo II - Entrega 3

Este README tem como objetivo explicar o cálculo dos **valores máximos e mínimos** dos redirecionamentos para ONGs no projeto FoodPath. Através dessas fórmulas, conseguimos identificar quais ONGs receberam mais redirecionamentos (máximos) e quais receberam menos redirecionamentos (mínimos).

## 🧮 Fórmula para Cálculo de Máximos e Mínimos

Aqui vamos utilizar funções matemáticas diretamente nas consultas SQL para encontrar os valores desejados.

### Fórmula para Encontrar o Valor Máximo de Redirecionamentos

```sql
SELECT ong_name, MAX(total_redirects) as max_redirects
FROM (
  SELECT ong_name, COUNT(*) as total_redirects
  FROM redirect
  GROUP BY ong_name
);
```
Aqui, usamos uma subconsulta para contar o total de redirecionamentos para cada ONG.
A função `MAX()` é aplicada ao total de redirecionamentos para encontrar a ONG com o maior número de redirecionamentos.

```sql
SELECT ong_name, MIN(total_redirects) as min_redirects
FROM (
  SELECT ong_name, COUNT(*) as total_redirects
  FROM redirect
  GROUP BY ong_name
);
```

Semelhante à consulta anterior, usamos uma subconsulta para contar os redirecionamentos para cada ONG.
A função `MIN()` é então aplicada para encontrar a ONG com o menor número de redirecionamentos.

## 🧠 Detalhes do Funcionamento

A subconsulta dentro de cada fórmula agrupa os redirecionamentos por ONG e conta quantas vezes cada ONG foi redirecionada. Esse agrupamento é essencial para que as funções MAX() e MIN() possam ser aplicadas corretamente.
Dessa forma, as funções retornam, respectivamente, o maior e o menor valor de redirecionamentos agrupados pelas ONGs.

## 🎯 Aplicação no Projeto

Essas consultas podem ser usadas no projeto para analisar as ONGs que estão recebendo mais ou menos atenção dos usuários, ajudando a entender o comportamento de doação na plataforma. Isso permite que o nosso grupo tome decisões mais estratégicas sobre como aumentar a visibilidade das ONGs com menos redirecionamentos ou entender por que algumas ONGs têm mais redirecionamentos.