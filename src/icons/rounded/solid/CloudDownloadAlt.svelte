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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M17.974 7.146a1.028 1.028 0 0 1-.742-.569c-1.552-3.271-5.143-5.1-8.735-4.438A7.946 7.946 0 0 0 2.113 8.64a8.13 8.13 0 0 0 .033 2.89c.06.309-.073.653-.346.901a5.51 5.51 0 0 0-1.801 4.07c0 3.032 2.467 5.5 5.5 5.5h11c4.136 0 7.5-3.364 7.5-7.5 0-3.565-2.534-6.658-6.026-7.354Zm-2.853 7.562-2.707 2.707a1.993 1.993 0 0 1-1.405.584l-.009.002-.009-.002a1.993 1.993 0 0 1-1.405-.584l-2.707-2.707a.999.999 0 1 1 1.414-1.414L10 15.001v-5a1 1 0 1 1 2 0v5l1.707-1.707a.999.999 0 1 1 1.414 1.414Z"/></svg>
  