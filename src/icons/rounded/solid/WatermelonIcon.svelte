<script>
  export let size = "100%";
  export let strokeWidth = 0;
  let customClass = "";
  export { customClass as class };
  
  if (size !== "100%") {
    size = size.slice(-1) === 'x' 
    ? size.slice(0, size.length -1) + 'em'
    : parseInt(size) + 'px';
  }
  </script>
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M22.373 2.324A4.336 4.336 0 0 0 15.5 1.273L1.273 15.5a4.347 4.347 0 0 0-1.214 3.742c.718 3.917 5.816 4.606 9.038 4.765 10.878.156 18.424-11.957 13.276-21.683ZM8.618 18.614a1.307 1.307 0 0 1-1.849 0 5.369 5.369 0 0 1-.751-1.966.526.526 0 0 1 .634-.635 5.386 5.386 0 0 1 1.966.752 1.307 1.307 0 0 1 0 1.849Zm5-1a1.307 1.307 0 0 1-1.849 0 5.378 5.378 0 0 1-.752-1.966.526.526 0 0 1 .635-.634 5.394 5.394 0 0 1 1.966.751 1.307 1.307 0 0 1-.002 1.849Zm3-3a1.31 1.31 0 0 1-1.85 0 5.412 5.412 0 0 1-.751-1.966.526.526 0 0 1 .635-.635 5.412 5.412 0 0 1 1.966.751 1.31 1.31 0 0 1-.003 1.852Zm2-5a1.309 1.309 0 0 1-1.849 0 5.393 5.393 0 0 1-.752-1.966.526.526 0 0 1 .635-.635 5.412 5.412 0 0 1 1.966.751 1.308 1.308 0 0 1-.004 1.854Z"/></svg>
  