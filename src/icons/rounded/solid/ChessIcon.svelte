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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M2 20h10a2 2 0 0 1 2 2 2 2 0 0 1-2 2H2a2 2 0 0 1-2-2 2 2 0 0 1 2-2Zm9.752-14.293c-.019.041-1.029 1.6-1.029 1.6A1 1 0 0 1 10 9H4a1 1 0 0 1-.722-1.692S2.27 5.748 2.25 5.707A2.6 2.6 0 0 1 4.6 2h1.41V1a1 1 0 0 1 2 0v1H9.4a2.6 2.6 0 0 1 2.352 3.707ZM22 20h-6.537a3.993 3.993 0 0 1 0 4H22a2 2 0 0 0 2-2 1.952 1.952 0 0 0-2-2Zm-10.263-2a46.7 46.7 0 0 1-1.526-7h-6.42a46.246 46.246 0 0 1-1.527 7ZM14 10.731V18h8v-7.269A2 2 0 0 0 23 9V8a1 1 0 0 0-2 0v1h-2V8a1 1 0 0 0-2 0v1h-2V8a1 1 0 0 0-2 0v1a2 2 0 0 0 1 1.731Z"/></svg>
  