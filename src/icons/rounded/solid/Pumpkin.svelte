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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M6.541 23.972C-2.13 23.037-2.141 7 6.51 6.03c-4.483 4.57-4.71 13.814.031 17.942Zm2.61-17.63A11.608 11.608 0 0 0 5 15c0 4.569 2.88 8.8 4.308 8.982A26.324 26.324 0 0 1 8 15c0-3.979.383-6.846 1.151-8.658Zm8.339-.312c4.483 4.574 4.708 13.814-.031 17.942C26.13 23.037 26.141 7 17.49 6.03Zm-2.641.312C15.617 8.154 16 11.021 16 15a26.324 26.324 0 0 1-1.308 8.982C16.12 23.8 19 19.569 19 15a11.608 11.608 0 0 0-4.151-8.658ZM16 0a4.771 4.771 0 0 0-3.99 2.563c-.582-1.046-2.8-3.664-3.9-2.01A1 1 0 0 0 8.553 1.9C10.2 2.718 11 4.41 11 7.022 9.591 9.214 9.531 24.211 12 24c2.478.2 2.4-14.816 1-17-.03-5.352 3.922-5.886 4-4a1 1 0 0 0 0 2c3.467-.322 1.926-5.176-1-5Z"/></svg>
  