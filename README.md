# DevTasks

## Descripció

**DevTasks** és una aplicació web de gestió de tasques desenvolupada amb **HTML, CSS i JavaScript**.

Permet:

- Crear noves tasques.
- Marcar tasques com a completades o pendents.
- Eliminar tasques.
- Filtrar tasques per estat: **Totes, Pendents i Completades**.
- Consultar estadístiques de les tasques en temps real.
- Conservar les dades al navegador mitjançant `localStorage`.

El projecte també incorpora un entorn de desenvolupament automatitzat amb **GitHub Actions**, tests unitaris amb **Vitest**, gestió de dependències amb **Dependabot** i desplegament automàtic a **GitHub Pages**.

---

## Instal·lació

Per executar el projecte en local, cal clonar el repositori i instal·lar les dependències:

```bash
git clone https://github.com/jan-notario/DevTasks.git
cd DevTasks
npm install
```

---

## Tests

Els tests unitaris s'han desenvolupat amb **Vitest** i permeten validar la lògica de negoci de manera independent del navegador.

Per executar la suite de tests:

```bash
npm test
```

---

## GitHub Actions

El projecte disposa de dos workflows situats al directori `.github/workflows/`:

### `ci.yml` — Continuous Integration

S'executa automàticament quan es crea o actualitza una **Pull Request** cap a la branca `main`.

El workflow:

1. Configura l'entorn de Node.js.
2. Instal·la les dependències mitjançant `npm ci`.
3. Executa els tests amb `npm test`.

Si els tests fallen, la Pull Request no pot superar el check de CI.

### `deploy.yml` — Continuous Deployment

S'executa quan es fa un `push` o un `merge` a la branca `main`.

El workflow prepara els fitxers de l'aplicació i els desplega automàticament a **GitHub Pages**.

---

## Pull Requests

S'ha establert un flux de treball basat en **branques i Pull Requests**.

La branca `main` està protegida i no es permet fer-hi `push` directe.

El desenvolupament es realitza en branques auxiliars, per exemple:

```text
feature/nova-funcionalitat
fix/bug
```

Qualsevol modificació ha de passar per una **Pull Request** abans de poder integrar-se a `main`.

Per poder fer el merge, la Pull Request ha de superar correctament el check de CI:

```text
Install Dependencies and Run Tests
```

D'aquesta manera, els canvis es validen automàticament abans d'arribar a `main`.

---

## Deploy

L'aplicació està desplegada i disponible públicament mitjançant **GitHub Pages**.

👉 **[https://jan-notario.github.io/DevTasks/](https://jan-notario.github.io/DevTasks/)**

---

## Dependències

La gestió i actualització de les dependències es realitza mitjançant **Dependabot**.

La configuració es troba al fitxer:

```text
.github/dependabot.yml
```

Dependabot comprova setmanalment:

- Actualitzacions de les dependències de `npm`.
- Possibles vulnerabilitats i actualitzacions de seguretat.
- Actualitzacions de les GitHub Actions utilitzades en els workflows.

---

## Arquitectura

El projecte separa la **lògica de negoci** de la **interfície d'usuari**, facilitant el manteniment i les proves del codi.

### `js/app.js`

S'encarrega de la part relacionada amb la interfície de l'aplicació:

- Manipulació del DOM.
- Gestió dels esdeveniments de l'usuari.
- Actualització de la interfície.
- Persistència de les dades mitjançant `localStorage`.

### `js/taskManager.js`

Conté la **lògica de negoci pura**, independent del navegador i del DOM.

Inclou funcions com:

```text
isValidTask()
createTask()
filterTasks()
getTaskStats()
```

Aquesta separació permet provar la lògica de manera aïllada.

### `tests/`

El directori `tests/` conté els tests unitaris de l'aplicació.

En concret:

```text
tests/app.test.js
```

Aquests tests comproven el correcte funcionament de les funcions de `taskManager.js` i permeten detectar errors en la lògica de negoci abans d'integrar els canvis al projecte.