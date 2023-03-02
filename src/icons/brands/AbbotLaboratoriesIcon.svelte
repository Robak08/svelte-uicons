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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M20.812 2.401H0v3.197h19.773v.003c.571 0 1.03.462 1.03 1.03v10.741l-.003.008a1.032 1.032 0 0 1-1.034 1.023H4.231a1.033 1.033 0 0 1-1.034-1.03v-4.344c0-.568.466-1.03 1.034-1.03h13.37V8.804H3.189A3.186 3.186 0 0 0 0 11.99v6.423a3.187 3.187 0 0 0 3.189 3.186h17.623A3.186 3.186 0 0 0 24 18.413V5.589a3.186 3.186 0 0 0-3.188-3.188"/></svg>
  