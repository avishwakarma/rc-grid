# react-tiny-grid

A simple grid system for React.

## Installation

```bash
npm i -S react-tiny-grid
```

## Usage

#### Simple 12 columns grid

```jsx
import { Gridm, Row, Cell } from "react-tiny-grid";

const Page = () => {
  return (
    <Grid>
      <Row>
        <Cell>1</Cell>
        <Cell>2</Cell>
        <Cell>3</Cell>
        <Cell>4</Cell>
        <Cell>5</Cell>
        <Cell>6</Cell>
        <Cell>7</Cell>
        <Cell>8</Cell>
        <Cell>9</Cell>
        <Cell>10</Cell>
        <Cell>11</Cell>
        <Cell>12</Cell>
      </Row>
    </Grid>
  );
};
```

#### Using breakpoints

```jsx
import { Gridm, Row, Cell, Breakpoints } from "react-tiny-grid";

const breakpoints: Breakpoints = {
  small: 320,
  medium: 768,
  large: 1367
};

const Page = () => {
  return (
    <Grid breakpoints={breakpoints}>
      <Row>
        <Cell>1</Cell>
        <Cell>2</Cell>
        <Cell>3</Cell>
        <Cell>4</Cell>
        <Cell>5</Cell>
        <Cell>6</Cell>
        <Cell>7</Cell>
        <Cell>8</Cell>
        <Cell>9</Cell>
        <Cell>10</Cell>
        <Cell>11</Cell>
        <Cell>12</Cell>
      </Row>
    </Grid>
  );
};
```

## Properties

### Grid

#### `breakpoints`

Responsive breakpoints

type: `{small: number, medium: number, large: number}`

default value: `{small: 320, medium: 768, large: 1367}`

To change the default breakpoints, you can pass an object with

```jsx
const breakpoints = {
  small: 320,
  medium: 768,
  large: 1367
};
<Grid breakpoints={breakpoints}>...</Grid>;
```

#### `columns`

Columns visible for each breakpoints

type: `[number, number, number]`

default value: `[4, 6, 12]`

To change the default columns, you can pass an array with

```jsx
const columns = [4, 6, 12];
<Grid columns={columns}>...</Grid>;
```

#### `maxWidth`

Maximum width of grid container

type: `number`

default value: `1400`

To change the default max width, you can pass a number with

```jsx
const maxWidth = 1400;
<Grid maxWidth={maxWidth}>...</Grid>;
```

#### `children`

Children of grid

type: `FC<RowProps> | Array<FC<RowProps>>`

```jsx
<Grid>
  <Row>...</Row>
</Grid>
```

#### Row

#### `children`

Children of row

type: `FC<CellProps> | Array<FC<CellProps>>`

```jsx
<Grid>
  <Row>
    <Cell>...</Cell>
  </Row>
</Grid>
```

#### Cell

#### `span`

Spread of Cell within the Grid

type: `[number, number, number] | number`

default value: `[4, 6, 12]`

```jsx
<Grid>
  <Row>
    <Cell span={[4, 6, 12]}>...</Cell>
  </Row>
</Grid>
```

_The above Cell will take 4 columns in small, 6 in medium and 12 is large screens._

#### `skip`

Skip the cell from the grid (Add margin-left)

type: `[number, number, number] | number`

default value: `[0, 0, 0]`

```jsx
<Grid>
  <Row>
    <Cell skip={[0, 0, 6]}>...</Cell>
  </Row>
</Grid>
```

_The above Cell will skip 6 columns from the grid on large screens._

### `useBreakpoints` hook

Used to get the current breakpoint and viewport width

```jsx
import { useBreakpoints } from "react-tiny-grid";

const breakpoints = {
  small: 320,
  medium: 768,
  large: 1367
};
const { breakpoint, width } = useBreakpoints(breakpoints);
```

### Nested Grid example

`rc-grid` supports nested grids. You can use `Row` and `Cell` components inside another `Cell` component.

```jsx
<Grid>
  <Row>
    <Cell>
      <Row>
        <Cell>
          <p>Full width paragraph</p>
        </Cell>
      </Row>
    <Cell>
  </Row>
</Grid>
```

## Author

![my_pic](https://avatars1.githubusercontent.com/u/389185?s=100&v=1)

[](https://avatars1.githubusercontent.com/u/389185?s=460&v=4)

### Ashok Vishwakarma

[LinkedIn](https://www.linkedin.com/in/avishwakarmadev/) &bull; [Twitter](https://twitter.com/avishwakarmadev) &bull; [Medium](https://medium.com/@avishwakarma)
&bull; [Website](https://avishwakarma.dev)

```

```
