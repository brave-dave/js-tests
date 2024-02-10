# Git

Git è un software per il controllo di versione disponibile sul terminale.

Il sistema che concede, permette di creare una cronologia dei cambiamenti dei dati dentro il repository.

## Processi

### Quando finisci il lavoro

- [Commettere le ultime modifiche](#commit-last-changes)
```sh
```

## Commandi sul terminale

### Cancellare tutte le tue modifiche non committate

```sh
    git reset --hard
```

<h3 id="commit-last-changes">Commettere le ultime modifiche</h3>

Sostituire `<titolo del commit>` con il titolo.

```sh
    git add .
    git commit -m "<titolo del commit>"
```

### Cambiare branch

Sostituire `<branch>` con il nome del branch.

```sh
    git checkout "<branch>"
```

### Creare un nuovo branch

Sostituire `<branch>` con il nome del branch.

```sh
    git checkout -b "<branch>"
```

### Aggiornare il branch sul tuo computer

```sh
    git pull
```

### Aggiornare il branch online

```sh
    git push
```

## Termini

### Branch

Un **branch** e' un ramo isolato dove risiede una copia della repository.

### Main Branch

Il **main branch** e' il branch principale dove risiede il repository originale.

Questo e' usato come branch finale per la pubblicazione di nuove versioni dell'applicazione.

### Secondary Branch

I **secondary branch** sono dei rami copiati dal **main branch**, cosi che un utente puo lavorare sulle sue modifiche, prima di implementarle dentro il **main branch**.

### Pull Request

Una **pull request** e' una richiesta fatta da un utente, per implementare nuovi dati dal suo **secondary branch** al **main branch**

### Stage changes

**Stage changes** si riferisce a quell'azione di revisione dei cambiamenti. Quando si cambia il codice nel proprio computer, i cambiamenti devono essere rivisti prima di procedere.

### Commit changes

**Commit changes** si riferisce all'azione di commettere i propri dati nel **branch** in cui si sta lavorando

### Push branch

**Push branch** e' un azione per spingere i dati del **branch** dentro computer al **branch** online.

### Pull branch

**Push branch** e' un azione per tirare i dati del **branch** online al **branch** dentro il tuo computer.