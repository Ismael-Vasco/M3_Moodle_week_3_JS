# Objetivo de la Historia de Usuario

Crear una mini-app muy simple (**lista de notas**) que permita **agregar y eliminar elementos en el DOM**, y **guardar/recuperar esos datos usando Local Storage**.

---

## Descripción de las tareas

### TASK 1  
### 1. Estructura base (HTML)

Crear el archivo `manipulacion_dom.html` con:

- Un título y una breve instrucción.
- Un `<input>` de texto y un botón **“Agregar”**.
- Un `<ul id="listaNotas"></ul>` para renderizar las notas.

---

### TASK 2  
### 2. Selección e inspección (JS)

En un archivo de JavaScript:

- Seleccionar:
  - `input`
  - `button`
  - `<ul>`
- Usar `getElementById` y/o `querySelector`.
- Mostrar en consola las referencias para confirmar que existen.

---

### TASK 3  
### 3. Agregar notas al DOM

Al hacer click en **Agregar**:

- Validar que el input no esté vacío (mostrar un mensaje simple si lo está).
- Crear un `<li>` con:
  - `textContent = "..."`.
  - Un botón **“Eliminar”**.
- Insertar el `<li>` usando `appendChild()`.
- Limpiar el input y volver a enfocarlo.
- Imprimir en consola que la nota fue agregada.

---

### TASK 4  
### 4. Eliminar notas del DOM

Al hacer click en **Eliminar** dentro de un `<li>`:

- Remover ese `<li>` usando `removeChild()` desde la `<ul>`.
- Imprimir en consola que la nota fue eliminada.

---

### TASK 5  
### 5. Persistencia con Local Storage

- Mantener un arreglo en memoria con las notas.
- Cada vez que se agregue o elimine una nota:
  - Actualizar el arreglo.
  - Guardarlo con:
    ```js
    localStorage.setItem("notas", JSON.stringify(notas))
    ```
- Al cargar la página:
  - Si existe `localStorage.getItem("notas")`, recuperarlo.
  - Renderizar todas las notas.
- Imprimir en consola cuántas notas se cargaron.

---

### TASK 6  
### 6. Validación y evidencias

Verificar visualmente que:

- Las notas aparecen y desaparecen sin recargar la página.
- Al recargar la página, las notas se mantienen (Local Storage).

#### Capturas de pantalla requeridas:
- DOM antes y después de agregar y eliminar notas.
- Consola mostrando:
  - Guardado
  - Cargado
  - Cambios en la lista
- Local Storage visible en el panel **Application**.

---

## Criterios de aceptación

- Se agregan y eliminan elementos de la lista usando la **API del DOM**:
  - `appendChild`
  - `removeChild`
- Se utilizan al menos **dos métodos de selección**:
  - `getElementById`
  - `querySelector` / `querySelectorAll`
- Se modifica contenido usando `textContent`.
- **Local Storage**:
  - Las notas persisten tras recargar la página.
  - Guardado y recuperación funcionan correctamente.
- Se evidencian acciones en consola y se adjuntan las capturas solicitadas.
- Código comentado y uso correcto de `let` y `const`.
