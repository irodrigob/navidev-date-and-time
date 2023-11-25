# Objetivo

Para proyectos javascript estaba usando el paquete: https://github.com/knowledgecode/date-and-time para todo el tema de formateo de horas y fechas. Cuando comence a desarrollar con React Vite+Typescript np podía utilizar la librería por problemas de tipos. Fue entonces que me decide en hacer una en typescript que se pudiese usar en proyectos de typescript.

No he migrado toda la funcionalidad de la librería original, solo he hecho la parte básica para mi proyecto. Con lo cual todavía es más minimalista que el original :-)

Además, una funcionalidad

# Instalación

Es muy simplie:

```shell
pnpm install navidev-date-and-time
```

o

```shell
npm install navidev-date-and-time
```

# Como usarla

Lo primero es importar la librería:

```javascript
import DateUtils from "navidev-date-and-time/dist/dateUtils";
```

En tu código instanciar la clase:

```javascript
const dateUtils = new DateUtils();
```

Y llamar al método:

```javascript
let d = dateUtils.transform("15.08.2023", "DD.MM.YYYY", "YYYY-MM-DD");
```

# API

## Tokens

Los tokens son como se quiere que vea los días, meses, año, fecha y hora cuando se hacen transformación, formateo, etc..

Los tokens habilitados son los siguientes:

| token | Significado                      | Ejemplo de salida |
| :---- | :------------------------------- | :---------------- |
| YYYY  | cuatro digitos del año           | 0999, 2015        |
| YY    | dos digitos del año              | 99, 01, 15        |
| Y     | cuatro digitos del año sin ceros | 2, 44, 888, 2015  |
| MM    | Mes con ceros                    | 01, 12            |
| M     | Mes                              | 1, 12             |
| DD    | Día con ceros                    | 02, 31            |
| D     | Día                              | 2, 31             |
| HH    | 24 horas con ceros               | 23, 08            |
| H     | 24 horas                         | 23, 8             |
| hh    | 12 horas con ceros               | 11, 08            |
| h     | 12 horas                         | 11, 8             |
| A     | AM o PM                          | AM, PM            |
| mm    | Minuto con ceros                 | 14, 07            |
| m     | Minuto                           | 14, 7             |
| ss    | Segundos con ceros               | 05, 10            |
| s     | Segundos                         | 5, 10             |
| SSS   | Milisegundos (precisión alta)    | 753, 022          |
| SS    | Milisegundos (precisión media)   | 75, 02            |
| S     | Milisegundos (precisión baja)    | 7, 0              |
| Z     | Zona horaria                     | +0100, -0800      |
| ZZ    | Zona horaria con :               | +01:00, -08:00    |

## TRANSFORM

Método que transforma una fecha char con un formato determinado a otro formato.

El método tiene los siguientes parámetros:

- Fecha en formato string.
- Formato de la fecha pasada.
- Formato a convertido.
- Booleano para indicar que se quiere en formato UTC, parámetro opcional.

El método devuelve la fecha en formato string.

## FORMAT

Formatea una fecha en JS a un fecha con un formato determinado.

El método tiene los siguientes parámetros:

- Fecha en formato JS.
- Formato que se quiere.
- Booleano para indicar que se quiere en formato UTC, parámetro opcional.

El método devuelve la fecha en formato string.

## PARSE

Se le pasa una fecha string con un formato determinado y devuelve la fecha en formato JS.

El método tiene los siguientes parámetros:

- Fecha en formato string
- Formato de la fecha

El método devuelve la fecha en formato JS.

## addMonths, addDays, addHours, addMinutes, addSeconds, addMilliseconds

Métodos que permite añadir meses, días, horas, minutos, segundos o milisegundos a un fecha en formato JS.

Los parámetros son:

- Fecha en formato JS.
- Tiempo a sumar: meses, días, etc..
- Booleano si se quiere la salida en UTC, parámetro opcional.
