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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path fill-rule="evenodd" d="M16.066 1.043v7.523c-1.141-1.48-2.711-2.184-4.756-2.184-2.164 0-4.09.801-5.659 2.378-1.76 1.723-2.711 3.956-2.711 6.431 0 2.718.999 5.023 2.949 6.795C7.363 23.321 9.147 24 11.192 24c2.021 0 3.543-.534 5.017-2.014v1.941h4.851V0l-4.994 1.043zm-3.757 18.395c-2.544 0-4.375-1.844-4.375-4.271 0-2.305 1.831-4.271 4.185-4.271 2.33 0 4.138 1.869 4.138 4.344-.001 2.378-1.784 4.198-3.948 4.198z" clip-rule="evenodd"/></svg>
  