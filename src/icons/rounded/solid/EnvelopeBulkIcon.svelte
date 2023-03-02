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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M6 10H3V4a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4h-7a6 6 0 0 0-6 6Zm18 0v5a4 4 0 0 1-4 4h-2v-4a5 5 0 0 0-5-5H8a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4Zm-3 0c-.006-1.308-1.994-1.308-2 0 .006 1.308 1.994 1.308 2 0ZM8.996 18.591l5.908-5.908A2.984 2.984 0 0 0 13 12H3c-.718 0-1.378.254-1.894.676l5.915 5.915c.528.527 1.447.527 1.975 0Zm1.415 1.414a3.393 3.393 0 0 1-3.039.937c-.708-.128-1.345-.518-1.854-1.027L0 14.398V20a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4v-5.516l-.049-.02-5.541 5.541Z"/></svg>
  