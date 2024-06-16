# GRUPO 12 - Web Components

## Miembros

- Cristóbal Pérez-Cotapos
- Sebastián Cavagnaro
- Benjamín Vásquez

## Sell Item

Todo lo referente al componente `sell-item` se encuentra en la carpeta `sell-item`, en ambas formas, como componente de Lit y como componente de Web Components. Hay 5 vistas diferentes para mostrar el componente en distintos estados.

### Web Components

- El componente se llama `<sell-item>` y se puede encontrar dentro del archivo `sell-item.js`.
- Se utilizaron las vistas `different.html`, `no-image.html` y `x3.html` para mostrar el comportamiento del componente con esta tecnología.
- Se deben declarar los atributos `title`, `price`, `description` e `image-url`, 'discount' y 'discounted-price' para que el componente funcione correctamente.

### Lit

- El componente se llama `<sell-item-lit>` y se puede encontrar dentro del archivo `sell-item-lit.js`.
- Se utilizaron las vistas `index.html` y `giant.html` para mostrar el comportamiento del componente con esta tecnología.
- Se deben declarar los atributos `title`, `price`, `description`,`imageUrl` y `discount`, en este caso no se necesita 'discounted-price' ya que se calcula automáticamente con una función al interior del componente.
- Lit se utiliza desde su formato bundle por posibles problemas con el import de la librería.