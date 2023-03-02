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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="m23.923 15.615-1.475-3.538a4.983 4.983 0 0 0-3.644-2.982l-.24-.958A1.499 1.499 0 0 0 17.109 7H14.89c-.689 0-1.288.468-1.455 1.137l-.24.958a4.983 4.983 0 0 0-3.644 2.982l-1.475 3.538a.998.998 0 0 0-.077.385v3c0 1.304.836 2.415 2 2.828V22c0 1.103.897 2 2 2s2-.897 2-2h4c0 1.103.897 2 2 2s2-.897 2-2v-.172a3.004 3.004 0 0 0 2-2.828v-3a.998.998 0 0 0-.077-.385ZM14.167 11h3.666c1.215 0 2.302.725 2.77 1.847L21.084 14H10.917l.481-1.153A2.994 2.994 0 0 1 14.168 11ZM22 19a1 1 0 0 1-1 1H11a1 1 0 0 1-1-1v-2.8l.083-.2H12v1a1 1 0 1 0 2 0v-1h4v1a1 1 0 1 0 2 0v-1h1.917l.083.2V19ZM6.5 11H4V6.265c0-.089.003-.177.009-.265H9v1a1 1 0 1 0 2 0V6h5.84a1 1 0 0 0 .969-1.249c-.534-2.074-2.121-3.703-4.141-4.249a13.717 13.717 0 0 0-7.336 0C3.781 1.193 2 3.563 2 6.265V9a2 2 0 1 0 0 4v3c0 1.304.836 2.416 2 2.829V20a1 1 0 1 0 2 0v-2c0-.553-.447-1-1-1s-1-.448-1-1v-3h2.5a1 1 0 1 0 0-2Zm.355-8.568a11.739 11.739 0 0 1 6.289 0A3.833 3.833 0 0 1 15.311 4H4.687a3.825 3.825 0 0 1 2.169-1.568Z"/></svg>
  