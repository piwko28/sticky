# Sticky
Make elements sticky to the top of scrollable container


Using:
```js
$(".element").sticky();
```

## Parameters:
Use options object to pass the parameters:

```js
$(".element").sticky({
  parentContainer : $("#wrapper")
});
```

Possible parameters:
 - scrollContainer - parent container of sticky element that have a vertical scrollbar; default: window
 - parentContainer - parent container of sticky element that will limit sticky element by his height; default: window
 - updatePosition - if true, it will change top position by set transformY; default: true
