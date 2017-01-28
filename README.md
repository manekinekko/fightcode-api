<h1 align="center">Welcome to FightCode API Server</h1>
<p align="center">
  <img src="https://cloud.githubusercontent.com/assets/1699357/22400227/64597ff4-e5af-11e6-82fd-2fc2fd129777.jpeg" alt="fight code">
</p>

## Installation

Use `yarn` or `npm` to install the server dependencies:

```
$ git clone https://github.com/manekinekko/fightcode-api.git && cd $_
$ yarn # or npm install
```

## Run

Start the API server (on port 3000):

```
$ npm start
```

## API

### Entities

Here are the available entities:

- [http://localhost:3000/cats](http://localhost:3000/cats)
- [http://localhost:3000/zombies](http://localhost:3000/zombies)

All entities have the same schema:

```
{
  "id"
  "type"
  "slug"
  "trending_datetime"
  "strength"
  "url"
  "localUrl"
  "width"
  "height"
  "size"
},
```

### Query collections

```
GET    /cats
GET    /zombies
```

### Query a single entity

```
GET    /cats/rDIbIO2O7UStO
GET    /zombies/l46C9KrpAskCj3Al2
```


### Filter

```
GET /cats?width=474
GET /zombies?id=rDIbIO2O7UStO&id=h7pmVQ2crHvd6
```

### Paginate

Use `_page` and optionally `_limit` to paginate returned data.

In the `Link` header you'll get `first`, `prev`, `next` and `last` links.

```
GET /cats?_page=7
GET /cats?_page=7&_limit=10
```

## License

The MIT License (MIT)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
