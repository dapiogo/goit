import './App.css';
import { Example } from './Example';
import { ExampleWithChildren } from './ExampleWithChildren';
import { Product } from './Product';
import { ProductComponent } from './ProductComponent';
import { ExampleWithProps } from './ExampleWithProps';

const products = [
  {
    id: 'id-1',
    title: 'title1',
    secondTitle: 'Nasz drugi tytul',
    count: 20,
    description: 'Desc',
  },
  {
    id: 'id-2',
    title: 'title2',
    secondTitle: 'Nasz drugi tytul 40',
    count: 40,
    description: 'Desc',
  },
  {
    id: 'id-3',
    title: 'title3',
    secondTitle: 'Nasz drugi tytul 50',
    count: 50,
    description: 'Desc',
  },
  {
    id: 'id-4',
    title: 'title4',
    secondTitle: 'Nasz drugi tytul 40',
    count: 40,
    description: 'Desc',
  },
  {
    id: 'id-5',
    title: 'title1',
    secondTitle: 'Nasz drugi tytul',
    count: 20,
    description: 'Desc',
  },
  {
    id: 'id-7',
    title: 'title2',
    secondTitle: 'Nasz drugi tytul 40',
    count: 40,
    description: 'Desc',
  },
  {
    id: 'id-8',
    title: 'title3',
    secondTitle: 'Nasz drugi tytul 50',
    count: 50,
    description: 'Desc',
  },
  {
    id: 'id-10',
    title: 'title4',
    secondTitle: 'Nasz drugi tytul 40',
    count: 40,
    description: 'Desc',
  },
];

const secondProducts = [
  {
    id: 'id-1',
    image:
      'https://cdn.shopify.com/s/files/1/0548/7362/0655/files/snakerstoreAdidas_Campus_00s_Core_Black-HQ8708-0_2048x2048.png',
    name: 'Produkt 1',
    size: 'M',
    color: 'Czerwony',
    delivery: '24h',
    description: 'Opis produktu 1',
  },
  {
    id: 'id-2',
    image:
      'https://cdn.shopify.com/s/files/1/0548/7362/0655/files/snakerstoreAdidas_Campus_00s_Core_Black-HQ8708-0_2048x2048.png',
    name: 'Produkt 2',
    size: 'L',
    color: 'Niebieski',
    delivery: '48h',
    description: 'Opis produktu 2',
  },
  {
    id: 'id-3',
    name: 'Produkt 3',
    size: 'S',
    color: 'Zielony',
    delivery: '24-72h',
    description: 'Opis produktu 3',
  },
  {
    id: 'id-4',
    image:
      'https://cdn.shopify.com/s/files/1/0548/7362/0655/files/snakerstoreAdidas_Campus_00s_Core_Black-HQ8708-0_2048x2048.png',
    name: 'Produkt 4',
    size: 'XL',
    color: 'Czarny',
    delivery: '48-96h',
    description: 'Opis produktu 4',
  },
];

//App rodzic wszystkich komponentow w nich ukladamy inne komponenty aplikacji
function App() {
  return (
    <div>
      {products.map((product) => (
        <Product
          key={product.id}
          title={product.title}
          secondTitle={product.secondTitle}
          description={product.description}
          count={product.count}
        />
      ))}
      {/* komponent z rozserzonym proptypes */}
      <Example
        isVisible={true}
        names={['tomek', 'piotrek']}
        obj={{
          name: 'Przykladowy komponent',
          count: 100,
        }}
      />
      {/* komponent produkt ze zdjeciami i domyslna wartoscia zdjecia (produkt o
      id-3 nie ma zdjecia wiec jest pobierane domyslna wartosc zdjecia) */}
      <div>
        {secondProducts.map((product, index) => (
          <ProductComponent
            key={index}
            image={product.image}
            name={product.name}
            size={product.size}
            color={product.color}
            delivery={product.delivery}
            description={product.description}
          />
        ))}
      </div>
      {/* //komponent z children */}
      <ExampleWithChildren title="komponent z dzieckiem">
        <div>Komponent children - Dziecko</div>
      </ExampleWithChildren>
      {/* //komponent z children bez przekazania wartosci wewnatrz komponentu*/}
      <ExampleWithChildren title="komponent bez dziecka" />

      {/* W komponentach React możemy przekazywać różne wartości za pomocą propsów. 
      Poniżej przedstawiam kilka przykładów różnych rodzajów wartości, które można przekazywać w propsach: */}
      {/* Tekst: */}
      <ExampleWithProps textProp="Przykładowy tekst" />
      {/* Liczby: */}
      <ExampleWithProps numberProp={42} />
      {/* Tablice */}
      <ExampleWithProps arrayProp={['jeden', 'dwa', 'trzy']} />
      {/* Obiekty */}
      <ExampleWithProps objectProp={{ name: 'John', age: 25 }} />
      {/* Boolean */}
      <ExampleWithProps boolProp={true} />
    </div>
  );
}

export default App;
